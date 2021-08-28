import React,{useState,useEffect} from 'react';
import {FoodCard} from '../../components';
import {prodListEndpoint} from '../../services/product-endpoint';


function Dashboard(){

    const [products,setProducts] = useState([
        {
            image:
              'https://media.istockphoto.com/photos/tortilla-wrap-with-fried-minced-meat-and-vegetables-picture-id1134104922?k=6&m=1134104922&s=612x612&w=0&h=uHvx-DCHljM8ivxDAGN5NgQbuFmZFQ8tz5NAyoXSEo0=',
            name: 'Default',
            price: 7,
          },
          
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
    <div> { products.map((list, index)=>(
            <FoodCard key={index} {...list} /> 
        )
       )}  </div>
    )
}

export default Dashboard;