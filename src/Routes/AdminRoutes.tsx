import { RouteType } from "./Types";

// import { AddProduct } from "@/Pages";
import { AddProduct } from "../Pages/AddProduct";

export const AdminRoutes: RouteType[] = [
  {
    path: "/add-product",
    element: <AddProduct />,
  },
];
