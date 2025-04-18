import { UserDetails, UserSignIn, UserSignUp } from "@/schemas/user.schema";
import { HttpService } from "./http.service";
import { HTTPError } from "ky";
import { ErrorDetails, ResDetails } from "@/types/response";

export class AuthService {
  static async signIn(
    signInDetails: UserSignIn,
  ): Promise<string | ErrorDetails | null> {
    try {
      const response = HttpService.post("api/auth/sign-in", {
        json: signInDetails,
      });
      const json = await response.json<ResDetails<string>>();
      return json.data;
    } catch (error) {
      if (error instanceof HTTPError) {
        return error.response.json();
      }

      if (error instanceof Error) {
        console.log({ code: "UNKOWN_SIGN_IN_ERROR", details: error });
      }

      return null;
    }
  }

  static async signUp(
    signUpDetails: UserSignUp,
  ): Promise<UserDetails | ErrorDetails | null> {
    try {
      const response = HttpService.post("api/auth/sign-up", {
        json: {
          ...signUpDetails,
          username: null,
        },
      });
      const data = await response.json<UserDetails>();
      return data;
    } catch (error) {
      if (error instanceof HTTPError) {
        return error.response.json();
      }

      if (error instanceof Error) {
        console.log({ code: "UNKOWN_SIGN_UP_ERROR", details: error });
      }

      return null;
    }
  }
}
