import { AuthService } from "@/services/auth.service";
import { ActionFunction, redirect } from "react-router";

export const action: ActionFunction = async () => {
  const data = await AuthService.signOut();

  if (data) {
    return redirect("/auth/sign-in");
  }

  return null;
};
