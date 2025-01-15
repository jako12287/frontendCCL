import { createBrowserRouter, RouteObject } from "react-router-dom";

import Login from "../views/login";
import MovementRecord from "../views/movimentRecord";
import Home from "../views/home";
import NotFound from "../views/noFound";
import ProtectedRoute from "./protectedRoute";

const Router: RouteObject[] = [
  {
    id: "login",
    path: "/login",
    element: <Login />,
  },
  {
    id: "home",
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    id: "record",
    path: "/record",
    element: (
      <ProtectedRoute>
        <MovementRecord />
      </ProtectedRoute>
    ),
  },
  {
    id: "notFound",
    path: "*",
    element: <NotFound />,
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter(Router);
