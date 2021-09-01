import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/mariachis.png'

function Home(){
    return(
        <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
      
          >
          <img src={logo} alt="Logo" width="450" height="450" />
        
          <Text color={'gray.500'} maxW={'3xl'}>
          Login to start selling!
          </Text>
          <Stack spacing={6} direction={'row'}>
          <Link to="/signup">
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.300'}
              _hover={{ bg: 'orange.300' }}>
              Sign In
            </Button>
            </Link>

            <Link to="/login">
            <Button rounded={'full'} px={6}>
             Login
            </Button>
            </Link>


          </Stack>
        </Stack>
      </Container>
    )
}

export default Home