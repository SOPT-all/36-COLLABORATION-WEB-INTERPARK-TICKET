import { createRouter } from 'react-router';
import MainPage from '@/pages/MainPage/MainPage';
import PaymentStep1 from '@/pages/Payment/Step1';
import PaymentStep2 from '@/pages/Payment/Step2';
import PaymentStep3 from '@/pages/Payment/Step3';

export const router = createRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/payment/step1',
    element: <PaymentStep1 />,
  },
  {
    path: '/payment/step2',
    element: <PaymentStep2 />,
  },
  {
    path: '/payment/step3',
    element: <PaymentStep3 />,
  },
]); 