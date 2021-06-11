// import { Flex, Heading, VStack, Stack, HStack, Box } from "@chakra-ui/react";

// export const Hero = ({ title, subtitle, alignment }) => (
//   <Box w="85vw" h="100vh">
//     <Stack mt="10vh" ml="5vw">
//       <Heading
//         fontSize="8vh"
//         bgGradient="linear(to-t, #DF426C, #B58C2A)"
//         bgClip="text"
//         textAlign={alignment}
//         mt="20vh"
//       >
//         {title}
//       </Heading>
//       <Heading fontSize="5vh" textAlign={alignment}>
//         {subtitle}
//       </Heading>
//     </Stack>
//   </Box>
// );

// Hero.defaultProps = {
//   title: "Natalie Carmouche",
//   subtitle: "Story Artist and Animator",
//   alignment: "left",
// };

import React from "react";
import NextLink from "next/link";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
export function Hero({ title, subtitle, image, ctaLink, ctaText, ...rest }) {
  return (
    <>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="90vh"
        px={8}
        bg="orange.100"
        {...rest}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
          ml={[0, 0, 0, 20]}
          mb={[1, 1, 1, 0]}
        >
          <Heading
            as="h1"
            size="3xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            {title}
          </Heading>
          <Heading
            as="h2"
            size="xl"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            {subtitle}
          </Heading>
          {/* <NextLink href={ctaLink}>
            <Button
              color="primary.800"
              bg="blue.200"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              {ctaText}
            </Button>
          </NextLink> */}
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
      <Center bg="orange.100" h="10vh">
        <ChevronDownIcon w={8} h={8} />
      </Center>
    </>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "Natalie Carmouche",
  subtitle: "Story Artist and Animator",
  image:
    "https://static.wixstatic.com/media/6b8f86_624167b8e1524ea4929e2f5fe6ff0a9d~mv2.jpg/v1/fill/w_600,h_574,al_c,q_80,usm_0.66_1.00_0.01/logo_01.webp",
  ctaText: "Get in touch",
  ctaLink: "/aboutMe",
};
