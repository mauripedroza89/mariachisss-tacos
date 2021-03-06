import React,{ useState} from 'react';
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

function Checkout({theCart,history,updateCart}){
    const [navSize, changeNavSize] = useState("large")
    const [billChange,setBillChange] = useState(0)
    const [removeCart,setRemoveCart] = useState(0)
    const [order,setOrder] = useState({})
    const [ loaderSpin, setLoaderSpin] = useState(false)

    const onSubmit = async (e) => {
      e.preventDefault()

        try{
        setLoaderSpin(true)
        const {data} = await orderCreateWS(theCart)
        history.push('/orderrecord')
      }catch(error){
        console.log("error al enviar data",error)
      }
  }


  const theBillChange  = (total,bill) => {
       setBillChange( bill - total)
  }

  const removeFromCart = (cant,index) => {
      theCart.orderproducts[index].cant = theCart.orderproducts[index].cant  - 1
      theCart.orderproducts[index].totalXcant = theCart.orderproducts[index].totalXcant  - theCart.orderproducts[index].price
      

      if(!theCart.orderproducts[index].cant){
        theCart.orderproducts.splice(index,1)
        console.log(theCart.orderproducts)
      }
      updateCart(theCart,true)
  }

    return(
      <div >
        <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} 
        pos="sticky"
            left="0"
            h="100vh"
            marginTop="0.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize === "small" ? "10px" : "10px"}
            alignItems={navSize === "small" ? "right" : "flex-start"}
            w={navSize === "small" ? "75px" : "250px"}
            flexDir="column"
            justifyContent="space-between"
            backgroundColor={"#ffba70"} >
        <Flex p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav">
          <Stack spacing={4} w={'full'} maxW={'md'}>

        <Heading textAlign="center" size="l" fontWeight="extrabold">
          Order summary
          </Heading>
        <div>
            {theCart.orderproducts.map((product,index)=> <div  className="row">
              <div className="col-2" name="orderproducts" id="orderproducts">{product.orderproducts}</div>
              <div className="col-2">
                <Button  onClick={()=>removeFromCart(product.cant,index)}
                    colorScheme={'red'}
                    size="xs" fontSize="md">
                  -
                </Button>{' '}
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
                  <strong name="total" id="total">${theCart.total}</strong>
                </div>
              </div>
              <hr />
              <Flex p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav">
                <Heading textAlign="center" size="l">Amount paid</Heading>
              <div className="billrow">
                <div className="billcol">
                <button type="button" className="billcol2" onClick={()=>theBillChange(theCart.total,100)}><img src={img100dollar} alt="100 bill"  />$100</button>
                <button type="button" className="billcol2" onClick={()=>theBillChange(theCart.total,50)}><img src={img50dollar} alt="50 bill"  />$50</button>
                <button type="button" className="billcol1" onClick={()=>theBillChange(theCart.total,20)}><img src={img20dollar} alt="20 bill"  />$20</button>

                </div>
                <div className="billcol">
                <button type="button" className="billcol1" onClick={()=>theBillChange(theCart.total,10)}><img src={img10dollar} alt="10 bill"  />$10</button>
                <button type="button" className="billcol1" onClick={()=>theBillChange(theCart.total,5)}><img src={img5dollar} alt="5 bill"  />$5</button>
                </div>
                </div>
            <div className="col-2">
                  <strong>Change Amount</strong>
                </div>
                <div className="col-1 text-right">
                  <Alert borderRadius={20} status="success">
                  <Text >{billChange < 0 ? "The amount selected is not enough" :  billChange}</Text></Alert>
                </div>
                <div>
              <Button 
              onClick={onSubmit} 
                    margin-top="20"
                    colorScheme={'red'}
                    bg={'red.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    >Checkout</Button>
            </div>

              </Flex>
            </>
        </div>
        </Stack>
        </Flex>
      </Stack>
      </div>
    )
}

export default Checkout;