import React from "react";
import { signIn, useSession } from "next-auth/client";
import { Layout } from "../components/Layout";
import ReactPlayer from "react-player/file";
import {
  Center,
  Heading,
  Stack,
  Button,
  IconButton,
  LinkBox,
  LinkOverlay,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaGoogleDrive } from "react-icons/fa";

export default function Page() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <>
          <Head>
            <title>Client Work</title>
          </Head>
          <Layout
            headTitle="Natalie's Animations"
            title="Animations"
            subtitle="Like you wouldn't believe"
          >
            <Center my={8}>
              <Stack direction="column">
                <Center>
                  <Heading size="lg" justify="center">
                    Videos not working?
                  </Heading>
                </Center>
                <LinkBox>
                  <LinkOverlay href="https://drive.google.com/drive/folders/1RXnd-vcOGFMtqm9fykD7schYYQj4Ia11?usp=sharing">
                    <Button variant="ghost">
                      <Stack direction="row" align="center" my={2}>
                        <Heading size="lg">Click here for originals</Heading>
                        <IconButton as={FaGoogleDrive} />
                      </Stack>
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </Stack>
            </Center>
            {/* <Center my={6}> */}
            <AspectRatio ratio={4096 / 2160}>
              <ReactPlayer
                url="boss_1.mp4"
                controls
                width="100%"
                height="100%"
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            </AspectRatio>
            {/* </Center> */}
            <Center my={6}>
              <ReactPlayer
                url="boss_2.mp4"
                controls
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            </Center>
            <Center my={6}>
              <ReactPlayer
                url="boss_3.mp4"
                controls
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            </Center>
            <Center my={6}>
              <ReactPlayer
                url="boss_4.mp4"
                controls
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload",
                    },
                  },
                }}
              />
            </Center>
          </Layout>
        </>
      ) : (
        <Layout
          headTitle="Natalie's Animations"
          title="Animations"
          subtitle="Like you wouldn't believe"
        >
          <Center>
            <Stack direction="column" my={6} spacing={6}>
              <Center>
                <Heading>You are not permitted to see this page!</Heading>
              </Center>
              <Heading>Please sign in before viewing this content</Heading>
              <Button onClick={signIn}>Sign in</Button>
            </Stack>
          </Center>
        </Layout>
      )}
    </>
  );
}
