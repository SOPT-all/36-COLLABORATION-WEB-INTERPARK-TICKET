import { createBrowserRouter } from "react-router";
import MainPage from "@/pages/Main/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default router;
