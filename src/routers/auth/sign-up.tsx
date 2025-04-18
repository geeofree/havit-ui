import { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import { ActionFunction, Link, redirect, useNavigation } from "react-router";
import { Main, SignUpForm } from "./components";
import { AuthService } from "@/services/auth.service";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = await AuthService.signUp({
    first_name: formData.get("first_name") as string,
    last_name: formData.get("last_name") as string,
    date_of_birth: formData.get("date_of_birth") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (data) {
    return redirect("/auth/sign-in");
  }

  return null;
};

export function SignUp() {
  const navigation = useNavigation();
  return (
    <Fragment>
      <Text as="h1" fontSize="3xl" fontWeight="bold">
        Sign-Up
      </Text>
      <Main>
        <SignUpForm isSubmitting={navigation.state === "submitting"} />
      </Main>
      <Text>
        Already have an account?{" "}
        <Link to="/auth/sign-in">
          <Text as="span" color="blue.500">
            Sign-In!
          </Text>
        </Link>
      </Text>
    </Fragment>
  );
}
