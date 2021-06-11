import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { LightMode } from "@chakra-ui/react";

const LifeDrawing = () => (
  <>
    <LightMode>
      <DarkModeSwitch />
      <Hero title="Life Drawing" subtitle="like you wouldn't believe" />
    </LightMode>
  </>
);

export default LifeDrawing;
