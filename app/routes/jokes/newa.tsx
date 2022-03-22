import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { Container, Input, Text, Box } from "@chakra-ui/react";
function newa() {
  return (
    <ChakraProvider>
      <Container>
        <Text>Input</Text>
        <Input title="Input"></Input>
        <Box my={"1rem"}>
          <Text my={"10px"}>Otro input</Text>
          <Input title="Input"></Input>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default newa;
