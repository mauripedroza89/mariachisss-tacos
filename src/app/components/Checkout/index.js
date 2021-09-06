import React,{useState} from 'react';
import './style.css';
import { orderCreateWS } from '../../services/order-endpoint';
import {
    Button,
    Text,
    Heading,
    Stack,
    Flex,
  } from '@chakra-ui/react';

function Checkout(){
    const [navSize, changeNavSize] = useState("large")
    const [order,setOrder] = useState({})
    
    


    return(
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} 
        pos="sticky"
            left="0"
            h="100vh"
            marginTop="0.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "10px" : "10px"}
            alignItems={navSize == "small" ? "right" : "flex-start"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            backgroundColor={"#ffba70"} >
        <Flex p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav">
          <Stack spacing={4} w={'full'} maxW={'md'}>

        <Heading textAlign="center" size="l" fontWeight="extrabold">
          Order summary
          </Heading>
        <div>
          
            <div  className="row">
              <div className="col-2">Gorditas</div>
              <div className="col-2">
                <Button type="submit" 
                    colorScheme={'red'}
                    size="xs" fontSize="md">
                  -
                </Button>{' '}
                <Button type="submit" 
                    colorScheme={'blue'}
                    size="xs" fontSize="md">
                  +
                </Button>
              </div>
  
              <div className="col-2 text-right">
                1 x $7
              </div>
            </div>
          
  
          
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">$8</div>
              </div>
            
  
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>$50</strong>
                </div>
              </div>
              <hr />
              <div className="row">
              <Button type="submit" 
                    colorScheme={'red'}
                    bg={'red.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    
                    >
            Checkout
            </Button>
              </div>
            </>
          
        </div>
        </Stack>
        </Flex>
      </Stack>
    )
}

export default Checkout;