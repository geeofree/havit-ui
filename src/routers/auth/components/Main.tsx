import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

export function Main(props: MainProps) {
  return (
    <Box
      as="main"
      padding="4"
      bgColor="bg"
      borderWidth="thin"
      borderRadius="md"
      borderColor="border"
      width={{
        base: "full",
        sm: "auto",
      }}
    >
      {props.children}
    </Box>
  );
}
