import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Outlet } from "remix";

function jokes() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Outlet />
    </ChakraProvider>
  );
}

export default jokes;
