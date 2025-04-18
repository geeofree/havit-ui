import ky from "ky";

export const HttpService = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL ?? "/",
});
