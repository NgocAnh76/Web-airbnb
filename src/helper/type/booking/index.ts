export interface ListBooking {
  booking_id: number;
  room_id: number;
  arrival_date: string;
  departure_date: string;
  number_guests: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  users: {
    full_name: string;
  };
  rooms: {
    room_name: string;
  };
}

export interface BookingData {
  room_id: number;
  user_id: number;
  arrival_date: string;
  departure_date: string;
  number_guests: number;
}
