import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { LightMode } from "@chakra-ui/react";

const AboutMe = () => (
  <>
    <LightMode>
      <DarkModeSwitch />
      <Hero title="About Me" subtitle="I'm alright I guess" />
    </LightMode>
  </>
);

export default AboutMe;
