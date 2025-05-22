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
  paymentId: string;
  status: string;
}
