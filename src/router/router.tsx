import { createBrowserRouter } from 'react-router';
import MainPage from '@/pages/Main/MainPage';
import ComponentTest from '@/pages/ComponentTest/ComponentTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/component-test',
    element: <ComponentTest />,
  },
]);

export default router;
