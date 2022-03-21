import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";

function prueba() {
  return (
    <ChakraProvider>
      <Box bg={"dodgerblue"} w={"200px"} height={"200px"}></Box>
    </ChakraProvider>
  );
}

export default prueba;
