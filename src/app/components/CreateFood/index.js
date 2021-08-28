import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { prodCreateWS  } from '../../services/product-endpoint';
import {
    Box,
    Button,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  function CreateFood({match, history, location, ...restProps}){

    const [food,setFood] = useState({})
    const [img,setImg] = useState({})
    const [ loaderSpin, setLoaderSpin] = useState(false)


    const onSubmit = async (e) => {
        e.preventDefault()

          try{
          setLoaderSpin(true)
          const formData = new FormData()
          const _data = {...food,image:img}
            for ( let key in _data ) {
                formData.append(key,_data[key])
            }

          const theSubmit = prodCreateWS
          const {data} = await theSubmit(formData)
          console.log(data)
          history.push('/productcreated')
        }catch(error){
          console.log("error al enviar data",error.response)
        } 
        console.log(food)
    } 

    const handleUpload = e => {
        
        console.log(e.target.files[0])
        setImg(e.target.files[0])
    }

    const handleChange = (e) => {
        setFood({...food,[e.target.name]:e.target.value})  
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
          Add a new dish! 
          </Heading>

          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
           Need to add an extra? 
               <Link color={'orange'} to="/addextra">Click here</Link>
         </Text>

          <form onSubmit={onSubmit}> 
          <Stack spacing="6">
             <Input onChange={handleChange} name="productname" type="productname" placeholder="Product Name" />

            <Input onChange={handleChange} placeholder="Ingredients" name="ingredients" />

            <Input onChange={handleChange} placeholder="Price" name="price" />

            <Input type="file" name="image" id="image" onChange={handleUpload}/>


            <Button type="submit" 
                    colorScheme={'orange'}
                    bg={'orange.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    isLoading={loaderSpin}
                    >
                Add new dish
            </Button>
            </Stack>
            </form>

        
        </Box>
      </Box>
      )
  }

  export default CreateFood;