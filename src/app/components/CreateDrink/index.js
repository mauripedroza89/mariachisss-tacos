import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { drinkCreateWS  } from '../../services/drink-endpoint';
import {
    Box,
    Button,
    Heading,
    Input,
    Text,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';

  function CreateDrink({match, history, location, ...restProps}){

    const [drink,setDrink] = useState({})
    const [img,setImg] = useState({})
    const [ loaderSpin, setLoaderSpin] = useState(false)


    const onSubmit = async (e) => {
        e.preventDefault()

          try{
          setLoaderSpin(true)
          const formData = new FormData()
          const _data = {...drink,image:img}
            for ( let key in _data ) {
                formData.append(key,_data[key])
            }

          const theSubmit = drinkCreateWS
          const {data} = await theSubmit(formData)
          history.push('/productcreated')
        }catch(error){
          console.log("error al enviar data",error.response)
        } 
    } 

    const handleUpload = e => {
        
        console.log(e.target.files[0])
        setImg(e.target.files[0])
    }

    const handleChange = (e) => {
        setDrink({...drink,[e.target.name]:e.target.value})  
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
          Add a new drink!
          </Heading>
          <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
            <Link  color={'orange'} to=  "/dashboard" >Go back to dashboard</Link>
            </Text>
          <form onSubmit={onSubmit}> 
          <Stack spacing="6">
             <Input onChange={handleChange} name="drinkname" type="drinkname" placeholder="Drink Name" />

            <Input onChange={handleChange} placeholder="Price" name="price" />
            
            <Input type="file" name="image" id="image" onChange={handleUpload}/>


            <Button type="submit" 
                    colorScheme={'orange'}
                    bg={'orange.300'}
                    _hover={{ bg: 'orange.300' }} 
                    size="lg" fontSize="md" 
                    isLoading={loaderSpin}
                    >
            Add new drink
            </Button>
            </Stack>
            </form>

        
        </Box>
      </Box>
      )
  }

  export default CreateDrink;