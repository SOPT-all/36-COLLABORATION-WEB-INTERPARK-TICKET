export interface PaymentMethod {
  name: string;
  imageUrl: string;
}

export interface PaymentMethodResponse {
  status: number;
  message: string;
  data: {
    paymentMethodList: PaymentMethod[];
  };
}

export const fetchPaymentMethods = async (): Promise<PaymentMethod[]> => {
  const response = await fetch('https://www.sopt-interpark.shop/api/v1/tickets/payment');
  const data: PaymentMethodResponse = await response.json();
  
  if (data.status !== 200) {
    throw new Error(data.message);
  }
  
  return data.data.paymentMethodList;
};

// 기존 하드코딩된 데이터는 임시로 유지
export const BANK_LIST: PaymentMethod[] = [
  {
    name: '농협(중앙)',
    imageUrl: 'https://github.com/user-attachments/assets/b0fc68ab-352e-4dbb-a631-4b305fcd9875',
  },
  {
    name: '국민은행',
    imageUrl: 'https://github.com/user-attachments/assets/7949a2ea-3646-43a6-a18b-117d5423752b',
  },
  {
    name: '우리은행',
    imageUrl: 'https://github.com/user-attachments/assets/c3c131bb-1c5c-49f1-92be-95f90eef4d6a',
  },
  {
    name: '기업은행',
    imageUrl: 'https://github.com/user-attachments/assets/2b3445c2-6225-4719-a365-41aeffc3941a',
  },
  {
    name: '신한은행',
    imageUrl: 'https://github.com/user-attachments/assets/2dea4bd9-833e-46d3-839a-ccbb44ff0804',
  },
  {
    name: '우체국',
    imageUrl: 'https://github.com/user-attachments/assets/4e7a5b4f-9f80-468d-9be5-b968f2ccdc60',
  },
  {
    name: '하나은행',
    imageUrl: 'https://github.com/user-attachments/assets/6fff6bf8-ac1c-42ea-b5df-d37eca588ecd',
  },
];
