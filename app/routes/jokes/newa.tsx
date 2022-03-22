import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import { Container, Input, Text, Box } from "@chakra-ui/react";
import { Form } from "remix";
function newa() {
  return (
    <ChakraProvider>
      <Container>
        <Form method="post" action="/events">
          <Box my={"1rem"}>
            <Text my={"10px"}>Otro input</Text>
            <Input title="Input" type={"number"}></Input>
          </Box>
        </Form>
      </Container>
    </ChakraProvider>
  );
}

export default newa;
