import React,{useState,useEffect} from 'react';
import {DrinkGrid, ExtraGrid, FoodGrid, NavBar, SearchBar} from '../../components';

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
        </div>
        <SearchBar handleChange={handleChange} />
     <div> 
        
        {isfilter.food && <FoodGrid search={search}/> }
        {isfilter.extra && <ExtraGrid search={search}/>}
        {isfilter.drink && <DrinkGrid search={search}/>}
         </div>
         </div>
    )
}

export default Dashboard;