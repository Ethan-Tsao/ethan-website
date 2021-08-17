import { Layout } from "../components/Layout";
import { Image, VStack, Center, Heading } from "@chakra-ui/react";
import Head from "next/head";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Natalie Carmouche</title>
        {/* <link rel="shortcut icon" href="/public/favicon.ico" /> */}
      </Head>
      <Center>
        <VStack width="80%" mt="3rem" spacing="4rem" justifyContent="center">
          <Heading
            as="h1"
            fontSize={["2rem", "3rem", "4rem", "5rem"]}
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            Storyboards
          </Heading>
          <Image src="/CONTACTME.png" />
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/310716029"
            width="640"
            height="360"
            frameborder="0"
            allowfullscreen
          />
        </VStack>
      </Center>
    </Layout>
  );
};

export default Index;
