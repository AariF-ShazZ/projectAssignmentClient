// ResponseDisplay.js
import { Heading,Text } from '@chakra-ui/react';
import React from 'react';

function ResponseDisplay({ response }) {
  return (
    <div>
      <Heading fontSize={"25px"}>Response</Heading>
      <Text>{response}</Text>
    </div>
  );
}

export default ResponseDisplay;
