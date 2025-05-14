import { createBrowserRouter } from "react-router";
import MainPage from "@/pages/Main/MainPage";
import PaymentTestPage from "@/pages/Payment/PaymentTestPage"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/payment-test", 
    element: <PaymentTestPage />,
  },
]);

export default router;
