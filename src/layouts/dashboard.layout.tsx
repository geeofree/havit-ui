import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { ChartArea, House, Target } from "lucide-react";
import { Form, NavLink, Link, Outlet } from "react-router";
import havitLogo from "@/assets/havit-logo.svg";

const links = [
  {
    path: null,
    text: "Home",
    icon: <House />,
  },
  {
    path: "/statistics",
    text: "Statistics",
    icon: <ChartArea />,
  },
  {
    path: "/habits",
    text: "Habits",
    icon: <Target />,
  },
];

export function DashboardLayout() {
  return (
    <Flex
      minWidth="vw"
      minHeight="vh"
      bgColor="bg.subtle"
      flexDirection="column"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap="4"
        paddingY="2"
        paddingX="4"
        bgColor="bg"
        borderBottomWidth="thin"
        borderBottomColor="border"
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
            <NavLink
              to={`/dashboard${link.path ?? ""}`}
              key={link.text}
              end={link.path === null}
            >
              {({ isActive }) => (
                <Button
                  type="button"
                  variant="ghost"
                  colorPalette={isActive ? "blue" : "gray"}
                  size="sm"
                >
                  {link.icon} {link.text}
                </Button>
              )}
            </NavLink>
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
