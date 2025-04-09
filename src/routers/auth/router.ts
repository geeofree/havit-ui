import { RouteObject } from "react-router";
import { AuthLayout } from "@/layouts";
import { loader as authIndexLoader } from ".";
import { SignIn, action as signInAction } from "./sign-in";
import { SignUp } from "./sign-up";

export const router: RouteObject[] = [
  {
    path: "auth",
    children: [
      {
        Component: AuthLayout,
        children: [
          { index: true, loader: authIndexLoader },
          { path: "sign-in", action: signInAction, Component: SignIn },
          { path: "sign-up", Component: SignUp },
        ],
      },
    ],
  },
];
