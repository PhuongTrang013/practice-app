import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Auth/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
