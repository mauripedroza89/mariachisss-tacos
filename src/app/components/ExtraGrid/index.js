import React, {useState,useEffect} from 'react';
import {extraListEndpoint} from '../../services/extra-endpoint';
import ExtraCard from '../ExtraCard';
import { Grid, GridItem } from "@chakra-ui/react"

function ExtraGrid(props){

    const [extra,setExtras] = useState([])

    const getData =  async () => {
        try {
            const {data} = await extraListEndpoint()
            setExtras(data.extras)
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
        <Grid  templateColumns="repeat(4, 3fr)" gap={0}>
        { extra.length ? extra.filter((list,index)=>
        list.productname.toLowerCase().includes(props.search.toLowerCase())).map((list, index)=>(
            <ExtraCard key={index} {...list} /> 
        )
       ): "" } 
    </Grid>
   </div>
    )
}

export default ExtraGrid;