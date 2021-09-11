import React from 'react';
import OrderCard from '../OrderCard';
import SideBar from '../SideBar';
import './style.css';

function OrderGrid(){
    return(
        <div className="orderrecord">
        <SideBar/>
        <div>
        <OrderCard/>
        </div>
        </div>
    )
}

export default OrderGrid;