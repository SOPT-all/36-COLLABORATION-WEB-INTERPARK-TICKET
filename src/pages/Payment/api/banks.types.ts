export interface PaymentMethod {
  name: string;
  imageUrl: string;
}

export interface FetchPaymentMethodsRequest {}

export interface FetchPaymentMethodsResponse {
  paymentMethodList: PaymentMethod[];
}
