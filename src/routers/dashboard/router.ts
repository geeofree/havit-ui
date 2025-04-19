import { DashboardLayout } from "@/layouts/dashboard.layout";
import { RouteObject } from "react-router";
import { DashboardHome } from ".";
import { DashboardHabits } from "./habits";
import { DashboardStats } from "./stats";
import { loader as systemEssentialLoader } from "./system";

export const router: RouteObject[] = [
  {
    path: "dashboard",
    loader: systemEssentialLoader,
    children: [
      {
        Component: DashboardLayout,
        children: [
          { index: true, Component: DashboardHome },
          { path: "habits", Component: DashboardHabits },
          { path: "statistics", Component: DashboardStats },
        ],
      },
    ],
  },
];
