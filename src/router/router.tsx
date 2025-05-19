import { createBrowserRouter } from 'react-router';
import MainPage from '@/pages/Main/MainPage';
import PaymentStep1 from '@/pages/Payment/Step1';
import PaymentStep2 from '@/pages/Payment/Step2';
import PaymentStep3 from '@/pages/Payment/Step3';
import SelectDatePage from '@/pages/SelectDate/SelectDatePage';
import SeatSelectPage from '@/pages/SeatSelect/SeatSelectPage';

export const router = createBrowserRouter([
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
  {
    path: '/date-select',
    element: <SelectDatePage />,
  },
  {
    path: '/seat-select',
    element: <SeatSelectPage />,
  },
]);
