import { createBrowserRouter } from 'react-router';
import MainPage from '@/pages/Main/MainPage';
import Payment from '@/pages/Payment/Payment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
]);

export default router;
