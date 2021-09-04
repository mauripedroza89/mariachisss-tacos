import React, {useState,useEffect} from 'react';
import {prodListEndpoint} from '../../services/product-endpoint';
import FoodCard from '../FoodCard';
import { Grid} from "@chakra-ui/react"

function FoodGrid(props){

    const [products,setProducts] = useState([
        
          
    ])

    const getData =  async () => {
        try {
            const {data} = await prodListEndpoint()
            setProducts(data.prods)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(
    <div> 
        <Grid  templateColumns="repeat(4, 1fr)" gap={0}>
        { products.length ? products.filter((list,index)=>
        list.productname.toLowerCase().includes(props.search.toLowerCase())).map((list, index)=>(
            <FoodCard key={index} {...list} /> 
        )
       ): "" }  
       </Grid>
       </div>
    )
}

export default FoodGrid;