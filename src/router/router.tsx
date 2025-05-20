import { createBrowserRouter } from 'react-router';
import MainPage from '@/pages/Main/MainPage';
import Payment from '@/pages/Payment/Payment';
import SelectDatePage from '@/pages/SelectDate/SelectDatePage';
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
    path: '/date-select',
    element: <SelectDatePage />,
  },
  {
    path: '/seat-select',
    element: <SeatSelectPage />,
  },
]);

export default router;
