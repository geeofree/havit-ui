import { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import { ActionFunction, Link, useNavigation } from "react-router";
import { Main, SignUpForm } from "./components";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log("geo-formData", formData);
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
