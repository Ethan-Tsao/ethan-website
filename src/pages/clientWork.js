import React from "react";
import { signIn, useSession } from "next-auth/client";
import { Layout } from "../components/Layout";
import ReactPlayer from "react-player/file";
import { Center } from "@chakra-ui/react";

export default function Page() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {session ? (
        <>
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
        <p>
          <p>You are not permitted to see this page.</p>
          <button onClick={signIn}>Sign in</button>
        </p>
      )}
    </>
  );
}
