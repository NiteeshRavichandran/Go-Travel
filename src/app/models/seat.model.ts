export interface Seat {
  name: string;
  seatStatus: 'Available' | 'selected' | 'booked' | 'ladies' | 'ladiesSelected' | 'gents' | 'gentsSelected';
  passengerName?: string;
  passengerAge?: number;
  passengerGender?: string;
  seatPrice?: number;
}