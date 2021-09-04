import React,{useState} from 'react';
import {DrinkGrid, ExtraGrid, FoodGrid, Footer, NavBar, SearchBar,Sidebar} from '../../components';
import './style.css'

function Dashboard(){

const [search,setSearch] = useState('')
const [isfilter,setIsFilter] = useState({drink:false,food:false,extra:false})
                    //{drink:true,food:false,extra:false}
const onFilter = (value) => {
        setIsFilter(value)
}

const handleChange = (e) =>{
        setSearch(e.target.value)
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
        
        {isfilter.food && <FoodGrid search={search}/> }
        {isfilter.extra && <ExtraGrid search={search}/>}
        {isfilter.drink && <DrinkGrid search={search}/>}
         </div>
         <div>
                 Checkout
         </div>
         </div>
         <Footer/>
         </div>
    )
}

export default Dashboard;