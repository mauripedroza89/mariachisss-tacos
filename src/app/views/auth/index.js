import React, { useContext , useState } from 'react';
import {Link} from 'react-router-dom';
import {loginWS, signupWS} from '../../services/auth-endpoint';
import {Ctx} from '../../hooks/context';
import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'




function Auth({match, history, location, ...restProps}) {


    const [user,setUser] = useState({})
    const {login} = useContext(Ctx)

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [ loaderSpin, setLoaderSpin] = useState(false)
    


    const onSubmit = async (e) => {
      e.preventDefault()
       try{
        setLoaderSpin(true)
        const theSubmit = match.path === "/signup" ? signupWS : loginWS
        const {data} = await theSubmit(user)
        if(match.path === '/login'){
          login(data.result)
        }
        if(user){
        history.push('/dashboard')}
      }catch(error){
        console.log("error al enviar data",error.response)
      } 
  }
  
  const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})  
  }


  return (
    <div >
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
            {`${match.path !== '/signup' ? "Do not have an account?" : 'Already have an account?'} | `}
              <Link color={'orange'} to={match.path !== "/signup" ? "/signup" :"/login" }>Click here</Link>
         </Text>

          <form onSubmit={onSubmit}> 
          <Stack spacing="6">
             <Input onChange={handleChange} name="username" type="username" placeholder="Username" />

            <InputGroup size="md">
            <Input
            onChange={handleChange}
                name="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
            </InputGroup>

            {match.path === "/signup" &&
            <Input onChange={handleChange} placeholder="Email" name="email" />}


            <Button type="submit" 
                    colorScheme={'orange'}
                    bg={'orange.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    isLoading={loaderSpin}
                    >

            {match.path === "/signup" ? "Signup" : "Login"}
            </Button>
            </Stack>
            </form>

        
        </Box>
      </Box>
      </div>
  );
};

export default Auth;