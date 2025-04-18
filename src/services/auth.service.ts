import { HttpService } from "./http.service";

type UserData = {
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  password: string;
};

export class AuthService {
  static async signIn(email: string, password: string) {
    try {
      const response = HttpService.post("/api/auth/sign-in", {
        json: { email, password },
      });
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      return null;
    }
  }

  static async signUp(userData: UserData) {
    try {
      const response = HttpService.post("/api/auth/sign-up", {
        json: {
          ...userData,
          username: null,
        },
      });
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      return null;
    }
  }
}
