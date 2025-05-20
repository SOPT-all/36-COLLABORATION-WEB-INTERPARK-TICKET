import { create } from 'zustand';
import { UserInfo } from '../constants/payment';

interface PaymentState {
  ticketCount: number;
  totalPrice: number;
  deliveryMethod: string;
  userInfo: UserInfo | null;
  paymentMethod: string;
  discountAmount: number;
  pointAmount: number;
  setTicketCount: (count: number) => void;
  setTotalPrice: (price: number) => void;
  setDeliveryMethod: (method: string) => void;
  setUserInfo: (info: UserInfo) => void;
  setPaymentMethod: (method: string) => void;
  setDiscountAmount: (amount: number) => void;
  setPointAmount: (amount: number) => void;
  resetPayment: () => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  ticketCount: 0,
  totalPrice: 0,
  deliveryMethod: '',
  userInfo: null,
  paymentMethod: '',
  discountAmount: 0,
  pointAmount: 0,
  setTicketCount: (count) => set({ ticketCount: count }),
  setTotalPrice: (price) => set({ totalPrice: price }),
  setDeliveryMethod: (method) => set({ deliveryMethod: method }),
  setUserInfo: (info) => set({ userInfo: info }),
  setPaymentMethod: (method) => set({ paymentMethod: method }),
  setDiscountAmount: (amount) => set({ discountAmount: amount }),
  setPointAmount: (amount) => set({ pointAmount: amount }),
  resetPayment: () => set({
    ticketCount: 0,
    totalPrice: 0,
    deliveryMethod: '',
    userInfo: null,
    paymentMethod: '',
    discountAmount: 0,
    pointAmount: 0,
  }),
})); 