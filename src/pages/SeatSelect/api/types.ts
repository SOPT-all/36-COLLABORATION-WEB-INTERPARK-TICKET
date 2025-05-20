export interface SelectedSeat {
  grade: string;
  row: string;
  number: number;
}

export interface PatchSeatRequest {
  seats: SelectedSeat[];
}
