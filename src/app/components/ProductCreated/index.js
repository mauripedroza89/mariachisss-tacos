import React from 'react';
import {
    Box,
    Button,
    Heading,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';

const ProductCreated = () =>{
    return(
        <div>
            <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        minH="350vh"
        py="16"
        px={{ base: '6', lg: '10' }}
      >
        <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Product succesfully created!
          </Heading>
          <Stack spacing="6">
            <Button type="submit" 
                    colorScheme={'orange'}
                    bg={'orange.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    >
                    <a href="/addfood" >Add another dish</a>
            </Button>

            <Button type="submit" 
                    colorScheme={'orange'}
                    bg={'orange.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    >
                    <a href="/addextra" >Add another extra</a>
            </Button>
            <Button type="submit" 
                    colorScheme={'orange'}
                    bg={'orange.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    >
                    <a href="/adddrink" >Add another drink</a>
            </Button>

            <Button type="submit" 
                    colorScheme={'orange'}
                    bg={'orange.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    >
                    <a href= "/dashboard" >Go back to dashboard</a>
            </Button>
            </Stack>
            </Box>
      </Box>
        </div>
    )
}

export default ProductCreated;