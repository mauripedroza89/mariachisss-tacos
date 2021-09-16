import {
    Container,
    Stack,
    Text,
    Button,
    Image
  } from '@chakra-ui/react';
  import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/mariachis.png'
import './style.css'
import { Footer } from '../../components';


function Home(){
    return(
      <div className="home" >
        
        <Container className="container"  maxW={'3xl'}>
        <Stack
        
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 5 }}
      
          >
          
          <Image rounded={'full'} src={logo} alt="Logo" width="450" height="450"  />
         
          <Text color={'gray.500'} maxW={'3xl'}>
          Login to start selling!
          </Text>
          <Stack spacing={3} direction={'row'}>
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
        <Footer className="footerhome"/>
      </Container>
      </div>
    )
}

export default Home