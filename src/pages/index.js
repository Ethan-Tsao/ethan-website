import { Layout } from "../components/Layout";
import { Image, VStack, Center, Heading, Stack, Link } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";

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
          {/* Rabbit-Napped Speaker Deck */}
          <iframe
            title="Rabbit-Napped-Excerpt"
            src="https://speakerdeck.com/ncarmouche/rabbit-napped-storyboard-excerpt-natalie-carmouche"
            width="100%"
          />
          <Heading size="md" textAlign="center">
            If the Speaker Deck does not load, click{" "}
            <Link
              href="https://speakerdeck.com/ncarmouche/rabbit-napped-storyboard-excerpt-natalie-carmouche"
              color="teal.500"
            >
              THIS LINK
            </Link>
          </Heading>
          {/* Rabbit 1,2,3 Stack Row */}
          <Stack maxw="80%" direction="row" justify="center">
            <Image src="/rabbit1.png" boxSize="33%" objectFit="cover" />
            <Image src="/rabbit2.png" boxSize="33%" objectFit="cover" />
            <Image src="/rabbit3.png" boxSize="33%" objectFit="cover" />
          </Stack>
          {/* Script Thumbs */}
          <Image src="/script_thumbs.png" objectFit="cover" />

          {/* Sid and Mort Stack Row */}
          <Stack direction="row" justify="center">
            <Image src="/Sid.png" boxSize="50%" objectFit="cover" />
            <Image src="/Mort.png" boxSize="50%" objectFit="cover" />
          </Stack>

          {/* Opinatus */}
          <iframe
            title="Opinatus"
            src="https://player.vimeo.com/video/310716029"
            width="640"
            height="360"
          />
        </VStack>
      </Center>
    </Layout>
  );
};

export default Index;
