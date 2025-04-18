import { createBrowserRouter } from "react-router";
import { router as authRouter } from "./routers/auth/router";
import { router as notFoundRouter } from "./routers/not-found/router";
import { router as homeRouter } from "./routers/home/router";
import { router as dashboardRouter } from "./routers/dashboard/router";

export const router = createBrowserRouter([
  homeRouter,
  ...authRouter,
  ...dashboardRouter,
  notFoundRouter,
]);
