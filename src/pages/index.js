import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Carousel } from "../components/Carousel";
import { LightMode } from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <LightMode>
        <DarkModeSwitch />
        <Hero />
        <Carousel />
      </LightMode>
    </>
  );
};

export default Index;
