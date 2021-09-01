import React,{useState,useEffect} from 'react';
import {
  Flex,
  Select,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import {prodListEndpoint} from '../../services/product-endpoint';



function FoodCard({productname,price,image,ingredients,meat,...props}){
  const [listProd,setListProd] = useState('')
 

    return(
      <Flex p={10} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        w="250px"
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
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
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
          <Text mt="4" mb="8" align="left" maxW="md" fontWeight="medium">
           {ingredients} 
         </Text>
          <Select placeholder="Select meat">
            <option value="Asada">Asada</option>
            <option value="Pastor">Pastor</option>
            <option value="Chicken">Chicken</option>
            <option value="Birria">Birria</option>
            <option value="Barbacoa">Barbacoa</option>
            <option value="Standard meat">Standard meat</option>
          </Select>
        </Box>
      </Box>
    </Flex>
    
    )
}

export default FoodCard;