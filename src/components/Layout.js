import { LightMode, Box, Center, Flex } from "@chakra-ui/react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";


export const Layout = ({ children }) => {
  return (
    <>
      <LightMode>
        <Flex bg="white" justifyContent="center">
          <Box w="60%">
            <DarkModeSwitch />
            {children}
          </Box>
        </Flex>
      </LightMode>
    </>
  );
};
