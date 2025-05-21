import type { SeatData, SeatGrade } from '../types/SeatData';

export type SeatDataResponse = {
  seats: SeatData[];
};

export interface SelectedSeat {
  grade: SeatGrade;
  row: string;
  number: number;
}

export interface PatchSeatRequest {
  seats: SelectedSeat[];
}

export type PatchSeatResponse = SeatData[];
