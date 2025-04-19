import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Image,
  Menu,
  Portal,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  ChartArea,
  DoorOpen,
  House,
  Settings,
  Target,
  UserRound,
} from "lucide-react";
import { NavLink, Link, Outlet, useLoaderData } from "react-router";
import havitLogo from "@/assets/havit-logo.svg";
import { UserDetails } from "@/schemas/user.schema";

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

type DashboardMenuProps = {
  currentUser: UserDetails;
};

function DashboardTopMenu(props: DashboardMenuProps) {
  const { currentUser } = props;
  return (
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
      <Flex as="nav" gap="4" alignItems="center" hideBelow="md">
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
      <Menu.Root>
        <Menu.Trigger asChild>
          <AvatarGroup>
            <Avatar.Root>
              <Avatar.Fallback
                name={`${currentUser.first_name} ${currentUser.last_name}`}
              />
              <Avatar.Image />
            </Avatar.Root>
          </AvatarGroup>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="profile">
                <UserRound />
                <Text>Profile</Text>
              </Menu.Item>
              <Menu.Item value="settings">
                <Settings />
                <Text>Settings</Text>
              </Menu.Item>
              <Menu.Separator />
              <Menu.Item
                value="exit"
                color="fg.error"
                _hover={{ bg: "bg.error", color: "fg.error" }}
              >
                <DoorOpen />
                <Text>Exit</Text>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
}

function DashboardBotMenu() {
  return (
    <Flex
      as="footer"
      backgroundColor="bg"
      hideFrom="md"
      position="fixed"
      bottom="0"
      left="0"
      borderTopWidth="thin"
      borderTopColor="border"
      width="full"
      justifyContent="space-around"
    >
      {links.map((link) => (
        <ChakraLink
          as={NavLink}
          to={`/dashboard${link.path ?? ""}`}
          key={link.text}
          end={link.path === null}
          flexGrow="1"
        >
          {({ isActive }) => (
            <Button
              type="button"
              variant="ghost"
              colorPalette={isActive ? "blue" : "gray"}
              size="lg"
              width="full"
              display="flex"
              flexDirection="column"
              height="auto"
              paddingX="0"
              paddingY="2"
              fontSize="sm"
            >
              {link.icon} {link.text}
            </Button>
          )}
        </ChakraLink>
      ))}
    </Flex>
  );
}

export function DashboardLayout() {
  const currentUser = useLoaderData<UserDetails>();
  return (
    <Flex
      minWidth="vw"
      minHeight="vh"
      bgColor="bg.subtle"
      flexDirection="column"
    >
      <DashboardTopMenu currentUser={currentUser} />
      <Outlet />
      <DashboardBotMenu />
    </Flex>
  );
}
