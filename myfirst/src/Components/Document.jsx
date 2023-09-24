import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Document = () => {
  return (
    <Box w={"100%"} bg={"gray.100"} textAlign={"left"} p={"2% 1%"} >
      <Heading textDecoration={"underline"}>How to use it</Heading>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Get all products</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Get a single product</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Limit results</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Sort results</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Get all categories</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Get products in a specific category</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Add new product</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Update a product</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
        <Box m={"2% 0"}>
          <Heading fontSize={"20px"} mb={"2%"}>Delete a product</Heading>
          <Box bg={"gray.300"} p={"2% 1%"}>
            <Text>
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            </Text>
          </Box>
        </Box>
    </Box>
  )
}

export default Document