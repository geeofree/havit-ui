import { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import { ActionFunction, Link, redirect, useNavigation } from "react-router";
import { Main, SignUpForm } from "./components";
import { AuthService } from "@/services/auth.service";
import { UserSignUp } from "@/schemas/user.schema";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const reqDetails = Object.fromEntries(formData) as UserSignUp;
  const data = await AuthService.signUp(reqDetails);

  if (data === null) {
    return null;
  }

  if ("errorCode" in data) {
    return data;
  }

  return redirect("/auth/sign-in");
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
          <Text as="span" color="fg.info">
            Sign-In!
          </Text>
        </Link>
      </Text>
    </Fragment>
  );
}
