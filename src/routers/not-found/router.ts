import { RouteObject } from "react-router";
import { NotFound } from "./not-found";

export const router: RouteObject = {
  path: "*",
  Component: NotFound,
};
