import { UserService } from "@/services/user.service";
import { LoaderFunction, replace } from "react-router";

export const loader: LoaderFunction = async () => {
  const data = await UserService.getProfile();

  if (data === null || "errorCode" in data) {
    return replace("/auth/sign-in");
  }

  return data;
};
