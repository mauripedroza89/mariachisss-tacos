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
  import {AiFillDollarCircle,AiFillShop } from "react-icons/ai";
  
function OrderCard(props) {
  const {orderproducts,total,_id} = props
    return (
      <Center py={2}>
           
        <Box
          maxW={'430px'}
          w={'300px'}
          
          bg={useColorModeValue('blue.300', 'gray.800')}
          boxShadow={'xl'}
          rounded={'md'}
          overflow={'hidden'}>

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
              <Text fontSize={'xl'} fontWeight={800}>
                Order # {_id.slice(_id.length - 3)}
              </Text>
            
            </Stack>
          </Stack>
  
          <Box bg={useColorModeValue('blue.50', 'gray.900')} px={6} py={10}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={AiFillDollarCircle} color="red.400" />
                <strong>Total</strong>
                <Text>$ {total}</Text>
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillShop} color="red.400" />
                <strong>Ordered food</strong>
                {orderproducts.map((list, index)=><div key={index} {...list} >

                  <strong>{list.orderproducts}</strong>
                  <p>Price:{list.price}</p>
                  <span>Quantity:{list.cant}</span>

                </div> )}
              </ListItem>
            </List>
          </Box>
        </Box>
      </Center>
    );
  }

  export default OrderCard;