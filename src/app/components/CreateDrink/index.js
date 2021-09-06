import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { drinkCreateWS  } from '../../services/drink-endpoint';
import {
    Button,
    Heading,
    Input,
    Text,
    Stack,
    Flex,
    Image
  } from '@chakra-ui/react';
import Sidebar from '../SideBar';
import './style.css';
import background from '../../assets/images/background.png'

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
        <div className="sidebar">
          <div>
            <Sidebar/>
          </div>
          <Stack minH={'70vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>

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

        
            </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Truck Image'}
            objectFit={'cover'}
            src={background}
          />
        </Flex>
        
      </Stack>
      </div>
      )
  }

  export default CreateDrink;