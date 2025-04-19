import {
  Button,
  Flex,
  Image,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Form, Link, Outlet } from "react-router";
import havitLogo from "@/assets/havit-logo.svg";

const links = [
  {
    path: null,
    text: "Home",
  },
  {
    path: "statistics",
    text: "Statistics",
  },
  {
    path: "habits",
    text: "Habits",
  },
];

export function DashboardLayout() {
  return (
    <Flex
      minWidth="vw"
      minHeight="vh"
      bgColor="gray.100"
      flexDirection="column"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap="4"
        paddingY="2"
        paddingX="4"
        bgColor="white"
        borderBottomWidth="thin"
        borderBottomColor="gray.300"
      >
        <Link to="/dashboard">
          <Flex gap="2" alignItems="center">
            <Image src={havitLogo} height="8" />
            <Text fontSize="xl" color="green.600" fontWeight="bold">
              Havit
            </Text>
          </Flex>
        </Link>
        <Flex as="nav" gap="4" alignItems="center">
          {links.map((link) => (
            <ChakraLink asChild={true} key={link.text}>
              <Link to={`/dashboard/${link.path ?? ""}`}>{link.text}</Link>
            </ChakraLink>
          ))}
        </Flex>
        <Form action="/auth/sign-out" method="POST">
          <Button type="submit">Sign-Out</Button>
        </Form>
      </Flex>
      <Outlet />
    </Flex>
  );
}
