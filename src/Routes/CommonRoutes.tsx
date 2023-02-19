import { RouteType } from "./Types";

import { Home, Login } from "../Pages";

export const CommonRoutes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
