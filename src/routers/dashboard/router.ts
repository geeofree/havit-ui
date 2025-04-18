import { DashboardLayout } from "@/layouts/dashboard.layout";
import { RouteObject } from "react-router";
import { DashboardHome } from ".";
import { DashboardHabits } from "./habits";
import { DashboardStats } from "./stats";

export const router: RouteObject[] = [
  {
    path: "dashboard",
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
