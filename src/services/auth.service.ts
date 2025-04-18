export class AuthService {
  static async signIn(email: string, password: string) {
    const response = await fetch("/api/auth/sign-in", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Something went wrong while trying to sign-in. [${response.status}: ${response.statusText}]`,
      );
    }

    return response.json();
  }
}
