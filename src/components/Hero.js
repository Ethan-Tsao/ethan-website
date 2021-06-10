import { Flex, Heading, VStack, Stack, HStack, Box } from "@chakra-ui/react";

export const Hero = ({ title, subtitle, alignment }) => (
  <Box w="85vw" h="100vh">
    <Stack mt="10vh" ml="5vw">
      <Heading
        fontSize="8vh"
        bgGradient="linear(to-t, #DF426C, #B58C2A)"
        bgClip="text"
        textAlign={alignment}
        mt="20vh"
      >
        {title}
      </Heading>
      <Heading fontSize="5vh" textAlign={alignment}>
        {subtitle}
      </Heading>
    </Stack>
  </Box>
);

Hero.defaultProps = {
  title: "Natalie Carmouche",
  subtitle: "Story Artist and Animator",
  alignment: "left",
};
