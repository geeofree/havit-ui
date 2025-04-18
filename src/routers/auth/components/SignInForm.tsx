import { ErrorMessage } from "@/components";
import { ErrorDetails } from "@/types/response";
import { Field, Button, Flex, Input } from "@chakra-ui/react";
import { Form, useActionData } from "react-router";

type SignInFormProps = {
  isSubmitting?: boolean;
};

export function SignInForm(props: SignInFormProps) {
  const { isSubmitting } = props;
  const errorDetails = useActionData<ErrorDetails>();
  return (
    <Form action="/auth/sign-in" method="post">
      <Flex gap="4" flexDirection="column" minWidth="sm">
        <Field.Root required>
          <Field.Label>
            E-Mail <Field.RequiredIndicator />
          </Field.Label>
          <Input type="email" name="email" placeholder="E-Mail" />
        </Field.Root>

        <Field.Root required>
          <Field.Label>
            Password <Field.RequiredIndicator />
          </Field.Label>
          <Input type="password" name="password" placeholder="Password" />
        </Field.Root>

        {errorDetails ? <ErrorMessage {...errorDetails} /> : null}

        <Button type="submit" loading={isSubmitting} disabled={isSubmitting}>
          {isSubmitting ? "Signing-In..." : "Sign-In"}
        </Button>
      </Flex>
    </Form>
  );
}
