import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, take } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // return true;
    return this.authService.user.pipe(
      take(1),
      map(user => {
        const isAuth = !!user;
        const isAdmin = this.authService.getIsAdmin();
        
        if (isAuth) {
          if (isAdmin && (route.data as any).roles && (route.data as any).roles.includes('admin')) {
            return true; 
          } else if (!isAdmin && (route.data as any).roles && (route.data as any).roles.includes('user')) {
            return true; 
          }
        }
        return this.router.createUrlTree(['/login']);
      })
      // tap(isAuth => {
      //   if (!isAuth) {
      //     this.router.navigate(['/auth']);
      //   }
      // })
    );
  }
}
