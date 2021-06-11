import { Carousel } from "../components/Carousel";
import { LightMode } from "@chakra-ui/react";
import { Layout } from "../components/Layout";

const Index = () => {
  return (
    <>
      <LightMode>
        <Layout headTitle="Natalie Carmouche" />
        <Carousel />
      </LightMode>
    </>
  );
};

export default Index;
