import { Flex, Image, Text } from "@chakra-ui/react";
import { Outlet } from "react-router";
import havitLogo from "@/assets/havit-logo.svg";

export function AuthLayout() {
  return (
    <Flex
      minWidth="vw"
      minHeight="vh"
      bgColor="gray.100"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="4"
      >
        <Flex gap="2" alignItems="center">
          <Image src={havitLogo} height="16" />
          <Text fontSize="4xl" color="green.600" fontWeight="bold">
            Havit
          </Text>
        </Flex>
        <Outlet />
      </Flex>
    </Flex>
  );
}
