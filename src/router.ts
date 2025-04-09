import { createBrowserRouter } from "react-router";
import { router as authRouter } from "./routers/auth/router";
import { router as notFoundRouter } from "./routers/not-found/router";

export const router = createBrowserRouter([...authRouter, notFoundRouter]);
