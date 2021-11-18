import { isLoggedInState } from "../atoms";
import { useRecoilState } from "recoil";

import NextLink from "next/link";
import Router from "next/router";

import { useLogoutMutation } from "../generated/graphql";

import { setAccessToken } from "../accessToken";

import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { ThemeToggle } from "./ThemeToggle";

type Props = { path: string };

type LinkItemProps = {
  href: string;
  path: string;
  children: any;
};

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <Box
      p={2}
      bg={active ? "glassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
    >
      <Link to={href}>{children}</Link>
    </Box>
  );
};

const Header: React.FC<Props> = ({ path }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);

  const [logOut, { client }] = useLogoutMutation();

  const handleLogOut = async () => {
    await logOut();
    setAccessToken("");
    await client.resetStore();
    setIsLoggedIn(false);
  };

  return (
    <Box
      position="fixed"
      zIndex={999}
      as="nav"
      w="100%"
      backgroundColor={useColorModeValue("#fffffffc", "#262629fc")}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="flex-start" mr={5}>
          <Heading as="h1" size="l" letterSpacing="tighter" pt={1}>
            {/* <Logo /> */}
          </Heading>

          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="flex-start"
            flexGrow={1}
            mt={1}
          >
            <NextLink href="/" passHref>
              <Text mx={2} as={Link}>
                Home
              </Text>
            </NextLink>

            {isLoggedIn && (
              <NextLink href="/account" passHref>
                <Text as={Link}>Account</Text>
              </NextLink>
            )}
          </Stack>
        </Flex>

        <Box flex={1} align="right">
          <ThemeToggle />
          <Button
            ml={4}
            aria-label="log in/out button"
            onClick={() => {
              if (isLoggedIn) {
                handleLogOut();
              }
              Router.push("/login");
            }}
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </Button>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList px={2}>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/account" passHref>
                  <MenuItem as={Link}>Account</MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/almaraz333/nextjs-portfolio"
                  passHref
                >
                  <MenuItem as={Link}>Source</MenuItem>
                </NextLink>
                <NextLink href="/docs/AlmarazColton_Resume.pdf" passHref>
                  <MenuItem as={Link}>
                    <a href="/docs/AlmarazColton_Resume.pdf">Resume</a>
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
      {/* <div
        className={`${
          !navOpen && "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto border-t-2 lg:border-0 mt-3 lg:mt-0 z-50`}
      >
        {isLoggedIn && (
          <Link to="/account" className="mr-5">
            Account
          </Link>
        )}
        <button
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white mt-4 lg:mt-0 log-button"
          onClick={() => {
            if (isLoggedIn) {
              handleLogOut();
            }
            handleLogIn();
          }}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div> */}
    </Box>
  );
};

export default Header;
