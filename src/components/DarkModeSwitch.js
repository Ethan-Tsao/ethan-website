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
  Center,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");

  return (
    <HStack width="full" mt="3rem" justifyContent="center" spacing="10rem">
      {/* Desktop */}
      <Flex>
        <Flex display={["none", "none", "flex", "flex"]}>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Storyboards"
              fontSize="sm"
            >
              Storyboards
            </Button>
          </NextLink>

          <NextLink href="/lifeDrawing" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Life Drawing"
              fontSize="sm"
            >
              Life Drawing
            </Button>
          </NextLink>

          <NextLink href="/aboutMe" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About/Contact"
              fontSize="sm"
            >
              About/Contact
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
      </Flex>
      <Center position="relative" right="5rem">
        <LinkBox>
          <LinkOverlay href="/">
            <Heading fontSize={["xl", "xl", "2xl", "3xl"]} textAlign="center">
              Natalie Carmouche
            </Heading>
          </LinkOverlay>
        </LinkBox>
      </Center>
      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.300"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="end">
          <IconButton
            mt={2}
            ml={3}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
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

          <NextLink href="/aboutMe" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              About/Contact
            </Button>
          </NextLink>
          <HStack spacing="1rem" position="relative">
            <LinkBox>
              <LinkOverlay href="https://www.instagram.com/nataliecarmouche/">
                <IconButton
                  as={TiSocialInstagram}
                  w={8}
                  h={8}
                  bg="transparent"
                />
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay href="https://www.linkedin.com/in/natalie-carmouche/">
                <IconButton
                  as={TiSocialLinkedin}
                  w={8}
                  h={8}
                  bg="transparent"
                />
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay href="https://twitter.com/nataliecarmouc1">
                <IconButton as={TiSocialTwitter} w={8} h={8} bg="transparent" />
              </LinkOverlay>
            </LinkBox>
          </HStack>
        </Flex>
      </Flex>
      <HStack
        spacing="1rem"
        position="relative"
        right="3rem"
        display={["none", "none", "flex", "flex"]}
      >
        <LinkBox>
          <LinkOverlay href="https://www.instagram.com/nataliecarmouche/">
            <IconButton as={TiSocialInstagram} w={8} h={8} bg="transparent" />
          </LinkOverlay>
        </LinkBox>
        <LinkBox>
          <LinkOverlay href="https://www.linkedin.com/in/natalie-carmouche/">
            <IconButton as={TiSocialLinkedin} w={8} h={8} bg="transparent" />
          </LinkOverlay>
        </LinkBox>
        <LinkBox>
          <LinkOverlay href="https://twitter.com/nataliecarmouc1">
            <IconButton as={TiSocialTwitter} w={8} h={8} bg="transparent" />
          </LinkOverlay>
        </LinkBox>
      </HStack>
    </HStack>
  );
};
