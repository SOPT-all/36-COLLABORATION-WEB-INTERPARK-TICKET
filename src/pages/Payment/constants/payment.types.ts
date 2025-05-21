export interface UserInfo {
  name: string;
  birth: string;
  phoneNumber: string;
  email: string;
}

export interface CreatePaymentRequest {
  ticketCount: number;
  totalPrice: number;
  deliveryMethod: string;
  userInfo: UserInfo;
  paymentMethod: string;
}

export interface CreatePaymentResponse {
  // 실제 응답 데이터 구조에 맞게 작성
  // 예시: 결제 결과, 결제 ID 등
  paymentId: string;
  status: string;
}
