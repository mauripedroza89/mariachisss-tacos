import React, {useState,useEffect} from 'react';
import {drinkListEndpoint} from '../../services/drink-endpoint';
import DrinkCard from '../DrinkCard';
import { Grid, GridItem } from "@chakra-ui/react"

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
        <Grid  templateColumns="repeat(4, 5fr)" gap={0}> 
        
        { drink.length ? drink.filter((list,index)=>
        list.drinkname.toLowerCase().includes(props.search.toLowerCase())).map((list, index)=>(
            <DrinkCard key={index} {...list} /> 
        )
       ): "" }  
        </Grid>
        </div>
    )
}

export default DrinkGrid;