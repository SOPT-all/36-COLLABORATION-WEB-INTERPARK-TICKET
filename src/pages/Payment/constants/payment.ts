export interface UserInfo {
  name: string;
  birth: string;
  phoneNumber: string;
  email: string;
}

export interface PaymentRequest {
  ticketCount: number;
  totalPrice: number;
  deliveryMethod: string;
  userInfo: UserInfo;
  paymentMethod: string;
}

export interface PaymentResponse {
  status: number;
  message: string;
  data: PaymentRequest;
}

export const createPayment = async (paymentData: PaymentRequest): Promise<PaymentResponse> => {
  const response = await fetch('https://www.sopt-interpark.shop/api/v1/tickets/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  });

  const data: PaymentResponse = await response.json();
  
  if (data.status !== 201) {
    throw new Error(data.message);
  }
  
  return data;
}; 