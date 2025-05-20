import type { SeatData } from '../types/SeatData';

export type SeatDataResponse = {
  seatData: SeatData[];
};

export interface SelectedSeat {
  grade: string;
  row: string;
  number: number;
}

export interface PatchSeatRequest {
  seats: SelectedSeat[];
}

export type PatchSeatResponse = SeatData[];
