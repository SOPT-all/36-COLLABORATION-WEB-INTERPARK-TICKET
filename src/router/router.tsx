import { createBrowserRouter } from 'react-router';
import MainPage from '@/pages/Main/MainPage';
import SeatSelectPage from '@/pages/SeatSelect/SeatSelectPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/seat-select',
    element: <SeatSelectPage />,
  },
]);

export default router;
