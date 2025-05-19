import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@/pages/Main/MainPage';
import Payment from '@/pages/Payment/Payment';
import SeatSelectPage from '@/pages/SeatSelect/SeatSelectPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/seat-select',
    element: <SeatSelectPage />,
  },
]);

export default router;
