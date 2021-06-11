import { Layout } from "../components/Layout";
import { LightMode } from "@chakra-ui/react";

const AboutMe = () => (
  <>
    <LightMode>
      <Layout
        headTitle="All About Me"
        title="My name is Natalie"
        subtitle="And I like bears"
      />
    </LightMode>
  </>
);

export default AboutMe;
