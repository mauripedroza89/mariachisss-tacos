import emailjs from 'emailjs-com';
import React from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    Box,
    FormControl,
  } from "@chakra-ui/react";


function SendMenu(){

    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('menusender', 'mariachisss-menu', e.target, 'user_pfK3KZ4zQ3MtGiqGYo4CJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    return(
    <Flex
    borderRadius="20"
        flexDirection="column"
        width="30wh"
        height="30vh"
        backgroundColor="blue.400"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="1"
          justifyContent="center"
          alignItems="center"
        >
          
          <Heading color="white">Welcome</Heading>
          <Box minW={{ base: "80%", md: "438px" }}>
            <form onSubmit={sendEmail}>
              <Stack
              borderRadius="20"
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                <InputGroup >
                
                  <Input rounded={'full'} type="email" placeholder="email address" />
                </InputGroup>
                </FormControl>
                
                <Button
                  rounded={'full'}
                  type="submit"
                  variant="solid"
                  colorScheme="red"
                  bg={'blue.300'}
                  width="full"
                >
                  Send menu
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    )
}

export default SendMenu;