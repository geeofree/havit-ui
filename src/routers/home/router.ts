import { RouteObject } from "react-router";
import { loader as homeIndexLoader } from ".";

export const router: RouteObject = {
  index: true,
  loader: homeIndexLoader,
};
