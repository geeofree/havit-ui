import { LoaderFunction, replace } from "react-router";

export const loader: LoaderFunction = () => replace("/dashboard");
