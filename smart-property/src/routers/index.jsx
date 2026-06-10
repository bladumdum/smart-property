import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home";
import Prediction from "../pages/Prediction";
import History from "../pages/History";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/prediction", element: <Prediction /> },
        { path: "/history", element: <History /> },
      ],
    },
  ],
  {
    basename: "/projek-akhir",
  },
);
