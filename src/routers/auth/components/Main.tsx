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
      bgColor="white"
      borderWidth="thin"
      borderRadius="md"
      borderColor="gray.300"
    >
      {props.children}
    </Box>
  );
}
