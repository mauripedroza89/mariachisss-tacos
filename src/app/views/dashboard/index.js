import React,{useState} from 'react';
import {Checkout, DrinkGrid, ExtraGrid, FoodGrid, Footer, NavBar, SearchBar,Sidebar} from '../../components';
import './style.css'

function Dashboard(){

const [cart,setCart] = useState({
     orderproducts:[],
     ordernumber:0,
     total:0,
     status:"IN PROCESS"
})
const [search,setSearch] = useState('')
const [isfilter,setIsFilter] = useState({drink:false,food:false,extra:false})
                    //{drink:true,food:false,extra:false}


const onFilter = (value) => {
        setIsFilter(value)
}

const handleChange = (e) =>{
        setSearch(e.target.value)
}
const updateCart = (product,type) =>{
      /*  const newCart = {...cart}

        if(type === "food" && product.meat != undefined){
                console.log(product)
                newCart.orderproducts
                setCart({})
        } */

}

console.log(search)
    return(
        <div>
        <div>
        <NavBar onFilter={onFilter}/>
        <SearchBar handleChange={handleChange} />
        </div>
        <div className="dashboard">
        <Sidebar/>
        <div className="products">
        
        {isfilter.food && <FoodGrid search={search} updateCart={updateCart}/> }
        {isfilter.extra && <ExtraGrid search={search}/>}
        {isfilter.drink && <DrinkGrid search={search}/>}
         </div>
         <div>
                 <Checkout/>
         </div>
         </div>
         <Footer/>
         </div>
    )
}

export default Dashboard;