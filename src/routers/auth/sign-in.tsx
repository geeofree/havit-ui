import { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import { ActionFunction, Link, redirect, useNavigation } from "react-router";
import { Main, SignInForm } from "./components";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === password) {
    return redirect("/dashboard");
  }

  return null;
};

export function SignIn() {
  const navigation = useNavigation();
  return (
    <Fragment>
      <Text as="h1" fontSize="3xl" fontWeight="bold">
        Sign-In
      </Text>
      <Main>
        <SignInForm isSubmitting={navigation.state === "submitting"} />
      </Main>
      <Text>
        Don't have an account?{" "}
        <Link to="/auth/sign-up">
          <Text as="span" color="blue.500">
            Sign-Up!
          </Text>
        </Link>
      </Text>
    </Fragment>
  );
}
