import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import {
  useColorModeValue,
  DarkMode,
  LightMode,
  SimpleGrid,
  Box,
  Image,
} from "@chakra-ui/react";

export const Layout = ({ title, subtitle, alignment }) => {
  const bodyBackground = useColorModeValue("orange.100", "gray.700");
  return (
    <>
      <LightMode>
        <DarkModeSwitch />
        <SimpleGrid bgColor="orange.100" columns={2} justifyContent="center">
          <Box justifyContent="center">
            <Hero title={title} subtitle={subtitle} alignment={alignment} />
          </Box>
          <Box>
            <Image mt="20vh" src="https://static.wixstatic.com/media/6b8f86_624167b8e1524ea4929e2f5fe6ff0a9d~mv2.jpg/v1/fill/w_600,h_574,al_c,q_80,usm_0.66_1.00_0.01/logo_01.webp" />
          </Box>
        </SimpleGrid>
      </LightMode>
    </>
  );
};
