export type SeatGrade = 'R' | 'S';

export type SeatData = {
  grade: SeatGrade;
  price: number;
  row: string;
  availability: boolean[];
};

export type SeatPosition = { row: string; index: number };

export interface SeatDataResponse {
  seats: SeatData[];
}

export interface SelectedSeat {
  grade: SeatGrade;
  row: string;
  number: number;
}

export interface PatchSeatRequest {
  seats: SelectedSeat[];
}

export interface PatchSeatResponse {
  seats: SelectedSeat[];
}
