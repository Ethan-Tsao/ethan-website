import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Carousel } from "../components/Carousel";
import { LightMode } from "@chakra-ui/react";

const Storyboards = () => (
  <>
    <LightMode>
      <DarkModeSwitch />
      <Hero title="Storyboards" subtitle="like you wouldn't believe" />
    </LightMode>
  </>
);

export default Storyboards;
