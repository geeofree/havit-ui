import { RouteObject } from "react-router";
import { AuthLayout } from "@/layouts";
import { loader as authIndexLoader } from ".";
import {
  SignIn,
  loader as signInLoader,
  action as signInAction,
} from "./sign-in";
import { SignUp, action as signUpAction } from "./sign-up";
import { action as signOutAction } from "./sign-out";

export const router: RouteObject[] = [
  {
    path: "auth",
    children: [
      {
        Component: AuthLayout,
        children: [
          { index: true, loader: authIndexLoader },
          {
            path: "sign-in",
            loader: signInLoader,
            action: signInAction,
            Component: SignIn,
          },
          { path: "sign-up", action: signUpAction, Component: SignUp },
          { path: "sign-out", action: signOutAction, Component: SignUp },
        ],
      },
    ],
  },
];
