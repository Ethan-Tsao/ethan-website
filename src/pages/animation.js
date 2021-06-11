import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { LightMode } from "@chakra-ui/react";

const Animation = () => (
  <>
    <LightMode>
      <DarkModeSwitch />
      <Hero title="Animations" subtitle="like you wouldn't believe" />
    </LightMode>
  </>
);

export default Animation;
