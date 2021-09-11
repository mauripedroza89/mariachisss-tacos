import React from 'react';
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { GiShoppingCart } from 'react-icons/gi';



function ExtraCard({updateCart,productname,price,image,...props}){
 

    return(
      <Flex p={10} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        w="150px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        <Image
          src={image}
          alt={`Picture of ${productname}`}
          roundedTop="m"
        />

        <Box p="4">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {productname}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a onClick={updateCart} display={'flex'}>
                <Icon as={GiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            
            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {price}
              
            </Box>
            <NumberInput w="60px" defaultValue={1} min={1} >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            
          </Flex>
          
        </Box>
      </Box>
    </Flex>
    
    )
}

export default ExtraCard;