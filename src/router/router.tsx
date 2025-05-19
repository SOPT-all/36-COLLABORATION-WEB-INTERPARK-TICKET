import { createBrowserRouter } from 'react-router';
import MainPage from '@/pages/Main/MainPage';
import SelectDatePage from '@/pages/SelectDate/SelectDatePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <SelectDatePage />,
  },
]);

export default router;
