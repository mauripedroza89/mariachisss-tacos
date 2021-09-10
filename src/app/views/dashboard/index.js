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
const [isfilter,setIsFilter] = useState({div:true,drink:false,food:false,extra:false})
                    //{drink:true,food:false,extra:false}


const onFilter = (value) => {
        setIsFilter(value)
}

const handleChange = (e) =>{
        setSearch(e.target.value)
}


const updateCart = (product,type) =>{
        let newCart = {...cart,orderproducts:[...cart.orderproducts,product]}

        const totalCart = newCart.orderproducts.reduce((acc,prodCurrent)=>{
                return Number(prodCurrent.price)+ acc
              }, 0);
            
            
              const allProd = newCart.orderproducts.reduce((acc,current)=>{
                  //buscamos si existe el elemento dentro del arreglo acc
                if( acc.find((item)=> item._id === current._id) ){
                  //si existe buscuscamos su posicion
                  const indexProd = acc.findIndex((item)=> item._id === current._id)
                  acc[indexProd].cant = acc[indexProd].cant + 1
                  acc[indexProd].totalXcant = acc[indexProd].totalXcant + Number(current.price)
                  return acc
                }else{
                  //si no solo agramos al carrito los valores previos pero modificamos el current agradandole las llaves de total por procuto y cantidad inicializada en 1
                  return [...acc,{...current, cant:1, totalXcant:current.price }]
                }
              },[])
            
              newCart.orderproducts = allProd
              newCart.total = totalCart
              setCart(newCart)
        }



console.log("Se actualizo el carro",cart )





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
        {isfilter.div && <div className="freespace">Welcome to Mariachisss Tacos! </div>}
        {isfilter.food && <FoodGrid search={search} updateCart={updateCart}/> }
        {isfilter.extra && <ExtraGrid search={search} updateCart={updateCart}/>}
        {isfilter.drink && <DrinkGrid search={search} updateCart={updateCart}/>}
         </div>
         <div>
                 <Checkout theCart={cart}/>
         </div>
         </div>
         <Footer/>
         </div>
    )
}

export default Dashboard;