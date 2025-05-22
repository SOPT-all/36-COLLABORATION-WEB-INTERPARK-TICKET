import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from '@/router/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick={true}
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
}

export default App;
