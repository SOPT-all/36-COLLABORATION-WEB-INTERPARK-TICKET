export type SeatGrade = 'R' | 'S';

export type SeatData = {
  grade: SeatGrade;
  price: number;
  row: string;
  availability: boolean[];
};
