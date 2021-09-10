import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { AiOutlineNumber,AiFillDollarCircle,AiFillShop } from "react-icons/ai";
  
function OrderCard() {
    return (
      <Center py={2}>
          
        <Box
          maxW={'430px'}
          w={'full'}
          
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'xl'}
          rounded={'md'}
          overflow={'hidden'}>
              <Button
              mt={2}
              size="xs" fontSize="md"
              bg={'red.400'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.500',
              }}>
              X
            </Button>
          <Stack
            textAlign={'center'}
            p={2}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'sm'}
              fontWeight={500}
              bg={useColorModeValue('red.50', 'red.900')}
              p={2}
              px={3}
              color={'red.500'}
              rounded={'full'}>
              Order summary
            </Text>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'xl'} as={AiOutlineNumber}> Total $</Text>
              <Text fontSize={'xl'} fontWeight={800}>
                Order
              </Text>
            
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={AiFillDollarCircle} color="red.400" />
                Total
                <Text>$ 50</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillShop} color="red.400" />
                Ordered food
                <Text>Torta, Burrito, Quesadilla, Wings,Sprite, Fanta</Text>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Center>
    );
  }

  export default OrderCard;