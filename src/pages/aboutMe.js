import { Layout } from "../components/Layout";
import {
  Image,
  Center,
  Grid,
  GridItem,
  HStack,
  LinkBox,
  LinkOverlay,
  IconButton,
  Text,
  Icon,
} from "@chakra-ui/react";
import Head from "next/head";

import {
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";

import { GrDocumentPdf } from "react-icons/gr";

const AboutMe = () => (
  <Layout>
    <Head>
      <title>About/Contact</title>
      {/* <link rel="shortcut icon" href="/public/favicon.ico" /> */}
    </Head>
    <Grid
      mt="3rem"
      h="70vh"
      templateRows="repeat(1, 1fr)"
      templateColumns="repeat(5, 1fr)"
      ml="-20"
    >
      <GridItem rowSpan={1} colSpan={3} ml="-20">
        {/* Profile Picture */}
        <Image src="/bio_art.jpg" />
        {/* Socials */}
        <HStack
          spacing={[0, 0, "1rem", "1rem"]}
          display="flex"
          justifyContent="center"
          mt="2rem"
        >
          <LinkBox>
            <LinkOverlay href="https://www.instagram.com/nataliecarmouche/">
              <IconButton
                as={TiSocialInstagram}
                w={[6, 8, 12, 12]}
                h={[6, 8, 12, 12]}
                bg="transparent"
              />
            </LinkOverlay>
          </LinkBox>
          <LinkBox>
            <LinkOverlay href="https://www.linkedin.com/in/natalie-carmouche/">
              <IconButton
                as={TiSocialLinkedin}
                w={[6, 8, 12, 12]}
                h={[6, 8, 12, 12]}
                bg="transparent"
              />
            </LinkOverlay>
          </LinkBox>
          <LinkBox>
            <LinkOverlay href="https://twitter.com/nataliecarmouc1">
              <IconButton
                as={TiSocialTwitter}
                w={[6, 8, 12, 12]}
                h={[6, 8, 12, 12]}
                bg="transparent"
              />
            </LinkOverlay>
          </LinkBox>
        </HStack>
        {/* Resume PDF */}
        <Center mt="3rem">
          <LinkBox>
            <LinkOverlay href="/resume.pdf">
              <Icon
                as={GrDocumentPdf}
                w={[12, 12, 20, 20]}
                h={[12, 12, 20, 20]}
                bg="transparent"
              />
              <Text textAlign="center" fontWeight="bold" fontSize="xl">
                Resume
              </Text>
            </LinkOverlay>
          </LinkBox>
        </Center>
      </GridItem>
      {/* Info Section */}
      <GridItem rowSpan={1} colSpan={2} mt="2rem">
        <Text fontSize={["sm", "md", "lg", "xl"]} fontWeight="semibold">
          Hello there! <br />
          <br />
          Thanks for taking a look at my website. I’m a storyboard artist from
          central Texas,educated and currently located here in Los Angeles, CA
          while working for Dreamworks TV. I want to make short films and tell
          stories that make my little sisters laugh. <br />
          <br />
          For any professional inquires or password to NDA work, please reach me
          at natalie.carmouche98@gmail.com
        </Text>
      </GridItem>
    </Grid>
  </Layout>
);

export default AboutMe;
