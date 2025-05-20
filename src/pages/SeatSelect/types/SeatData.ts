export type SeatGrade = 'R' | 'S';

export type SeatData = {
  grade: SeatGrade;
  price: number;
  row: string;
  availability: boolean[];
};

export type SeatGradeFilter = 'S' | 'R' | null;

export type SeatPosition = { row: string; index: number };

export type SeatType = 'S' | 'R';
