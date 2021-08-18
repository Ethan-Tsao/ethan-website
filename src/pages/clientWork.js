import React from "react";
import { signIn, useSession } from "next-auth/client";
import { Layout } from "../components/Layout";
import ReactPlayer from "react-player/file";
import { Center, Heading, Stack, Button } from "@chakra-ui/react";
import Head from "next/head";

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
            <Center my={6}>
              <ReactPlayer
                url="boss_1.mp4"
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
