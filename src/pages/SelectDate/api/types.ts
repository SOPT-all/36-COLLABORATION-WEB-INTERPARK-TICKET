// performance와 seatGrades 데이터에 대한 타입 정의

// 공연 정보 타입
export interface Performance {
  performanceTitle: string;
  performanceLocation: string;
  performanceImage: string; // URL 경로
  performanceGenre: string;
  runningTime: string; // 공연 시간
  ageLimit: number; // 연령 제한
  performanceTime: string; // 공연 시간
  authors: string; // 작가
}

// 좌석 등급 타입
export interface SeatGrades {
  grade: string; // 좌석 등급 (예: "R", "S")
  price: number; // 가격
  seatCount: number; // 좌석 수
}

// API 응답 데이터 타입
export interface DatePageResponse {
  performance: Performance; // 공연 정보
  seatGrades: SeatGrades[]; // 좌석 등급 정보
}
