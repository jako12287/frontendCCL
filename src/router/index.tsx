import { createBrowserRouter, RouteObject } from "react-router-dom";

import Login from "../views/login";
import MovementRecord from "../views/movimentRecord";
import Home from "../views/home";
import NotFound from "../views/noFound";
import ProtectedRoute from "./protectedRoute";
import Layout from "../components/layout";

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
        <Layout>
          <Home />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    id: "recordIn",
    path: "/recordIn",
    element: (
      <ProtectedRoute>
        <Layout>
          <MovementRecord />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    id: "recordOut",
    path: "/recordOut",
    element: (
      <ProtectedRoute>
        <Layout>
          <MovementRecord />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    id: "inventory",
    path: "/inventory",
    element: (
      <ProtectedRoute>
        <Layout>
          <MovementRecord />
        </Layout>
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
