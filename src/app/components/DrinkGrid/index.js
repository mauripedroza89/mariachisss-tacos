import React, {useState,useEffect} from 'react';
import {drinkListEndpoint} from '../../services/drink-endpoint';
import DrinkCard from '../DrinkCard';
import { Grid } from "@chakra-ui/react"

function DrinkGrid(props){

    const [drink,setDrinks] = useState([])

    const getData =  async () => {
        try {
            const {data} = await drinkListEndpoint()
            setDrinks(data.drinks)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(
    <div>
        <Grid  templateColumns="repeat(4, 2fr)" gap={0}> 
        
        { drink.length ? drink.filter((list,index)=>
        list.orderproducts.toLowerCase().includes(props.search.toLowerCase())).map((list, index)=>(
            <DrinkCard key={index} {...list} updateCart={()=>props.updateCart(list,"drinks")} /> 
        )
       ): "" }  
        </Grid>
        </div>
    )
}

export default DrinkGrid;