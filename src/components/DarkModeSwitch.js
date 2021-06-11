import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");

  return (
    <Flex>
      <Flex position="fixed" top="1rem" left="4rem" align="right">
        <LinkBox>
          <Heading>
            <LinkOverlay href="/">Natalie Carmouche</LinkOverlay>
          </Heading>
        </LinkBox>
      </Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home">
              Home
            </Button>
          </NextLink>

          <NextLink href="/storyboards" passHref>
            <Button as="a" variant="ghost" aria-label="About">
              Storyboards
            </Button>
          </NextLink>

          <NextLink href="/lifeDrawing" passHref>
            <Button as="a" variant="ghost" aria-label="Contact">
              Life Drawing
            </Button>
          </NextLink>

          <NextLink href="/animation" passHref>
            <Button as="a" variant="ghost" aria-label="Contact">
              Animation
            </Button>
          </NextLink>

          <NextLink href="/aboutMe" passHref>
            <Button as="a" variant="ghost" aria-label="Contact">
              About Me
            </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
        {/* <Switch color="green" isChecked={isDark} onChange={toggleColorMode} /> */}
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.500"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </NextLink>

          <NextLink href="/storyboards" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Storyboards
            </Button>
          </NextLink>

          <NextLink href="/lifeDrawing" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Life Drawing
            </Button>
          </NextLink>

          <NextLink href="/animation" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Animation
            </Button>
          </NextLink>

          <NextLink href="/aboutMe" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              About Me
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};
