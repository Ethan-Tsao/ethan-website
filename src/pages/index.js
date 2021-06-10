import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import { Carousel } from "../components/Carousel";
import {
  useColorModeValue,
  DarkMode,
  LightMode,
  SimpleGrid,
  Box,
  Image,
  GridItem,
} from "@chakra-ui/react";

const Index = ({ title, subtitle, alignment }) => {
  return (
    <>
      <LightMode>
        <DarkModeSwitch />
        <SimpleGrid bgColor="orange.100" columns={2} justifyContent="center">
          <Box justifyContent="center">
            <Hero title={title} subtitle={subtitle} alignment={alignment} />
          </Box>
          <Box>
            <Image
              mt="20vh"
              src="https://static.wixstatic.com/media/6b8f86_624167b8e1524ea4929e2f5fe6ff0a9d~mv2.jpg/v1/fill/w_600,h_574,al_c,q_80,usm_0.66_1.00_0.01/logo_01.webp"
            />
          </Box>
        </SimpleGrid>
        <Carousel />
      </LightMode>
    </>
  );
  // <Container height="100vh">
  //   <Hero />
  //   <Main>
  //     <Text>
  //       Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
  //     </Text>

  //     <List spacing={3} my={0}>
  //       <ListItem>
  //         <ListIcon as={CheckCircleIcon} color="green.500" />
  //         <ChakraLink
  //           isExternal
  //           href="https://chakra-ui.com"
  //           flexGrow={1}
  //           mr={2}
  //         >
  //           Chakra UI <LinkIcon />
  //         </ChakraLink>
  //       </ListItem>
  //       <ListItem>
  //         <ListIcon as={CheckCircleIcon} color="green.500" />
  //         <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
  //           Next.js <LinkIcon />
  //         </ChakraLink>
  //       </ListItem>
  //     </List>
  //   </Main>

  //   <DarkModeSwitch />
  //   <Footer>
  //     <Text>Next ❤️ Chakra</Text>
  //   </Footer>
  //   <CTA />
  // </Container>
};

export default Index;
