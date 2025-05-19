import { createBrowserRouter } from 'react-router';
import MainPage from '@/pages/Main/MainPage';
import SeatSelectPage from '@/pages/SeatSelect/SeatSelectPage';
import SelectDatePage from '@/pages/SelectDate/SelectDatePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
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
