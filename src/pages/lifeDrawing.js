import { Layout } from "../components/Layout";
import { Image, VStack, Center, Heading } from "@chakra-ui/react";
import Head from "next/head";

const LifeDrawing = () => (
  <Layout>
    <Head>
      <title>Life Drawing</title>
      {/* <link rel="shortcut icon" href="/public/favicon.ico" /> */}
    </Head>
    <Center>
      <VStack width="80%" mt="2rem" justifyContent="center" spacing="5">
        <Heading
          as="h1"
          fontSize={["2rem", "3rem", "4rem", "5rem"]}
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          Life Drawing
        </Heading>
        <Image src="/figures_01.png" />
        <Image src="/figures_02.png" />
        <Image src="/figures_03.png" />
      </VStack>
    </Center>
  </Layout>
);

export default LifeDrawing;
