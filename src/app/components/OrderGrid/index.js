import React, {useState,useEffect} from 'react';
import OrderCard from '../OrderCard';
import SideBar from '../SideBar';
import './style.css';
import { Grid } from "@chakra-ui/react"
import {orderListEndpoint}from '../../services/order-endpoint';

function OrderGrid(){

    const [order,setOrder] = useState([])

    const getData =  async () => {
        try {
            const {data} = await orderListEndpoint()
            setOrder(data.extras)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div className="orderrecord">
        <SideBar/>
        <div>
         <Grid templateColumns="repeat(4, 2fr)" gap={5}>
         { order.map((list, index)=><OrderCard key={index} {...list} /> )}
        </Grid>
        </div>
        </div>
    )
}



export default OrderGrid;