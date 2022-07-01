import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Laptop = (props)=>{

    const [products, setProducts] = useState([]);


    const getProducts =async()=>{
        //console.log("checking with db")
        let answer = await axios.get('http://localhost:8080/api/products');
        let allProducts = answer.data.products;
        setProducts(allProducts);
        console.log(allProducts);
    
        
      }
      getProducts();
   
    
    return(
        <>
        <Header></Header>
        <div className="container pt-5">
            <div className="row gx-5">

            {
                products.map(
                    (item) => {
                       if(item.categoryId==="1")
                        return(<ProductCard value={item}/>);
                    }

                )
                

            }

            </div>
        </div>
        {/* <div style={{backgroundColor:"#f2f3f5"}}>
            Laptop
            
        </div> */}
       
        
        </>
        
        
    )
}


export default Laptop 