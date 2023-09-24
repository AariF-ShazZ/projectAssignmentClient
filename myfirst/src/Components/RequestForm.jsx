// RequestForm.js
import { Box, Button, Heading, Input, Select, flexbox } from '@chakra-ui/react';
import React, { useState } from 'react';

function RequestForm({setResponse,formData}) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(method === "GET" || method === "DELETE"){
        const res = await fetch(url, {
          method: method,
        });
        const data = await res.text();
        setResponse(data);
      }else {
        const res = await fetch(url, {
          method: method,
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.text();
        setResponse(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box bg={""}>
      <Box
      as="form"
      onSubmit={handleSubmit}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      p={4} 
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-around"}
      m={"2%"}
    >
      <Select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        variant="flushed"
        mb={2} 
        w={"150px"}
        p={"2%"}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </Select>
      <Input
        type="text"
        variant="flushed"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        m={2}
      />
      <Button type="submit" colorScheme='teal'>Send Request</Button>
    </Box>
    </Box>
  );
}

export default RequestForm;
