import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Document = () => {
  const fetchCode1 = `
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))
`;
  const fetchCode2 = `
  fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json))
`;
  const fetchCode3 = `
  fetch('https://fakestoreapi.com/products?limit=5')
  .then(res=>res.json())
  .then(json=>console.log(json))
`;
  const fetchCode4 = `
  fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))
`;
  const fetchCode5 = `
  fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json())
  .then(json=>console.log(json))
`;
  const fetchCode6 = `
  fetch('https://fakestoreapi.com/products?category=jewelery')
  .then(res=>res.json())
  .then(json=>console.log(json))
`;
  const fetchCode7 = `
  fetch('https://fakestoreapi.com/products/post',{
    method:"POST",
  body:JSON.stringify(
  {
    title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic'
      }
  )
})
  .then(res=>res.json())
  .then(json=>console.log(json))
`;
  const fetchCode8 = `
  fetch('https://fakestoreapi.com/products/7',{
    method:"PUT",
  body:JSON.stringify(
  {
    title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic'
      }
  )
})
  .then(res=>res.json())
  .then(json=>console.log(json))
`;
  const fetchCode9 = `
  fetch('https://fakestoreapi.com/products/7',{
              method:"PATCH",
            body:JSON.stringify(
            {
              title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`;
  const fetchCode10 = `
  fetch('https://fakestoreapi.com/products/6',{
              method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
`;

  return (
    <Box w={"100%"} bg={"gray.100"} textAlign={"left"} p={"2% 1%"} >
      <Heading textDecoration={"underline"}>How to use it</Heading>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Get all products</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode1}
          </Text>
        </Box>
      </Box>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Get a single product</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode2}
          </Text>
        </Box>
      </Box>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Limit results</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode3}
          </Text>
        </Box>
      </Box>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Sort results</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode4}
          </Text>
          <Text fontWeight={"bold"} fontSize={"15px"}> Default value is in ascending mode, you can use with 'desc' or 'asc' as you want.</Text>
        </Box>
      </Box>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Get all categories</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode5}
          </Text>
        </Box>
      </Box>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Get products in a specific category</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode6}
          </Text>
        </Box>
      </Box>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Add new product</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode7}
          </Text>
        </Box>
      </Box>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Update a product</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode8}
          </Text>
          <Text>
            {fetchCode9}
          </Text>
        </Box>
      </Box>
      <Box m={"2% 0"}>
        <Heading fontSize={"20px"} mb={"2%"}>Delete a product</Heading>
        <Box bg={"gray.300"} p={"2% 1%"}>
          <Text>
            {fetchCode10}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Document