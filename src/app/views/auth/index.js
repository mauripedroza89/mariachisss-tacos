import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import {Ctx} from '../../hooks/context'
import {loginWS, signupWS} from '../../services/auth-endpoint'

import {
    Box,
    Button,
    Form,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'

function Auth({match, history, location, ...restProps}){
  const [data,setData] = useState({})

  const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value })
  }
  
  
    const login = useContext(Ctx)

    const handleSubmit = async (e, user) => {
        e.preventDefault()
        

        try{
        const formSubmit = match.path === "/signup" ? signupWS : loginWS
        const {data} = await formSubmit(user)
        if(match.path === "/login" ){
          login(data.result)
      }
      history.push("/profile")

        }catch(error){
            console.log("El error", error.response)
        }
    }


      return(
        <Box
        bg={useColorModeValue('gray.50', 'inherit')}
        minH="100vh"
        py="12"
        px={{ base: '4', lg: '8' }}
      >
        <Box maxW="md" mx="auto">

          <Heading textAlign="center" size="xl" fontWeight="extrabold">
          {match.path === "/signup" ? "Create an account" : "Login to your account"}
          </Heading>

          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            {`${match.path !== '/signup' ? "Do not have an account?" : 'Alreade have an account?'} | `}
              <Link to={match.path !== "/signup" ? "/signup" :"/login" }>Click here</Link>
         </Text>

         <form formSubmit={handleSubmit}>
          <Stack spacing="6">
             <Input name="username" type="username" placeholder="Username" onChange={handleChange}/>

            <InputGroup size="md">
            <Input
                name="password"
                pr="4.5rem"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
                
            </InputRightElement>
            </InputGroup>

            {match.path === "/signup" &&
            <Input placeholder="Email" name="email" onChange={handleChange}/>}


            <Button type="submit" 
                    colorScheme={'orange'}
                    bg={'orange.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    >

            {match.path === "/signup" ? "Signup" : "Login"}
            </Button>
            </Stack>
            </form>

        
        </Box>
      </Box>
      )
  }

export default Auth