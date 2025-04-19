import { UserDetails } from "@/schemas/user.schema";
import { ErrorDetails, ResDetails } from "@/types/response";
import { HttpService } from "./http.service";
import { HTTPError } from "ky";

export class UserService {
  static async getProfile(): Promise<UserDetails | ErrorDetails | null> {
    try {
      const response = HttpService.get("api/users/me");
      const json = await response.json<ResDetails<UserDetails>>();
      return json.data;
    } catch (error) {
      if (error instanceof HTTPError) {
        return error.response.json<ErrorDetails>();
      }

      if (error instanceof Error) {
        console.error({ code: "UNKOWN_SIGN_OUT_ERROR", details: error });
      }

      return null;
    }
  }
}
