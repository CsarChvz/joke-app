import { ChakraProvider, Text } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "remix";

function index() {
  return (
    <ChakraProvider>
      <Outlet />

      <Text>Esto es texto, lo siguiente nose:</Text>
    </ChakraProvider>
  );
}

export default index;
