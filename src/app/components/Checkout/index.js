import React,{useEffect, useState} from 'react';
import './style.css';
import { orderCreateWS } from '../../services/order-endpoint';
import {
    Button,
    Text,
    Heading,
    Stack,
    Flex,
    Alert
  } from '@chakra-ui/react';
import img5dollar from '../../assets/images/5dollars.png';
import img10dollar from '../../assets/images/10dollars.png';
import img20dollar from '../../assets/images/20dollars.png';
import img50dollar from '../../assets/images/50dollars.png';
import img100dollar from '../../assets/images/100dollars.png';

function Checkout({theCart,history}){
    const [navSize, changeNavSize] = useState("large")
    const [order,setOrder] = useState({})
    const [ loaderSpin, setLoaderSpin] = useState(false)

    const onSubmit = async (e) => {
      e.preventDefault()

        try{
        setLoaderSpin(true)
        const formData = new FormData()
        const _data = {...order}
          for ( let key in _data ) {
              formData.append(key,_data[key])
          }

        const theSubmit = orderCreateWS
        const {data} = await theSubmit(formData)
        history.push('/orderrecord')
      }catch(error){
        console.log("error al enviar data",error.response)
      } 
  } 
   
  const handleChange = (e) => {
    setOrder({...order,[e.target.name]:e.target.value})  
}

    return(
      <form onSubmit={onSubmit}>
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} 
        pos="sticky"
            left="0"
            h="100vh"
            marginTop="0.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "10px" : "10px"}
            alignItems={navSize == "small" ? "right" : "flex-start"}
            w={navSize == "small" ? "75px" : "200px"}
            w="250px"
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
          
            {theCart.orderproducts.map((product,index)=> <div  className="row">
              <div className="col-2" onChange={handleChange} name="orderproducts">{product.productname || product.drinkname}</div>
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
  
              <div className="col-2 text-right" >
                {product.cant} x ${product.price}
              </div>
            </div>)}
          
  
          
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong onChange={handleChange} name="total">${theCart.total}</strong>
                </div>
              </div>
              <hr />
              <Flex p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav">
                <Heading textAlign="center" size="l">Amount paid</Heading>
              <div className="billrow">
                <div className="billcol">
                <button className="billcol2"><img src={img100dollar} alt="my image"  />100</button>
                <button className="billcol2"><img src={img50dollar} alt="my image"  />50</button>
                <button className="billcol1"><img src={img20dollar} alt="my image"  />20</button>
                
                
                
                </div>
                <div className="billcol">
                <button className="billcol1"><img src={img10dollar} alt="my image"  />10</button>
                <button className="billcol1"><img src={img5dollar} alt="my image"  />5</button>
                </div>
                </div>
                
            <div className="col-2">
                  <strong>Change Amount</strong>
                </div>
                <div className="col-1 text-right">
                  <Alert borderRadius={20} status="success">
                  <Text >$50</Text></Alert>
                </div>
                <div>
              <Button type="submit" 
                    margin-top="20"
                    colorScheme={'red'}
                    bg={'red.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    isLoading={loaderSpin}
                    >Checkout</Button>
            </div>

              </Flex>
            </>
          
        </div>
        </Stack>
        </Flex>
      </Stack>
      </form>
    )
}

export default Checkout;