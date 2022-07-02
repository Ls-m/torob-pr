import React from 'react'
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import $ from 'jquery';
import axios from 'axios';

const Home = (props)=>{
    const [message, setMessage] = useState('');
    let navigate = useNavigate();
    const onClickHandler=()=>{
        navigate('/search')
        console.log('clicked');
    }
    
    const [products, setProducts] = useState([]);
    const getProducts =async()=>{
        //console.log("checking with db")
        let answer = await axios.get('http://localhost:8080/api/products');
        let allProducts = answer.data.products;
        setProducts(allProducts);
        //console.log(allProducts);
    
        
      }
      getProducts();

    const handleKeyDown = event => {
        //console.log(event.key);
    
        if (event.key === 'Enter') {
          event.preventDefault();
    
          // 👇️ access input value from state
          console.log("pressed");
          console.log(message);

          const searchedProduct = products.find((product)=>product.name===message);
          if(searchedProduct){
            console.log("product found"+searchedProduct.id);
            let Url = '/products/'+searchedProduct.id;
            navigate(Url);
          }else{
            console.log("product not found");
            let Url = '/notFound';
            navigate(Url);
          }

        //   if(message==="لپ تاپ"){
        //     navigate('/laptops');
        //     console.log("laptop")

        //   }else if(message==="موبایل"){
        //     navigate('/mobiles');
        //     console.log("mobile");

        //   }else{
            

        //   }

        }
      };

      


      
    return(
        <>
        <Header></Header>
        <div className='ps-4 pe-4 pt-4 align-items-center' style={{backgroundColor:"#f2f3f5", width:"100%",height:"600px"}}>
            <div className=' d-flex justify-content-center'>
            <img src="https://torob.com/static/images/torob_logo.svg"></img>
            <div>
                <div  style={{color:"#d73948",fontWeight:"bold",fontSize:"40px"}}><p>ترب</p></div>
                <div className='mt-3 align-items-center d-flex justify-content-center' style={{marginLeft:"auto",color:"#808080"}}><p>مقایسه قیمت هزاران محصول بین هزاران فروشگاه</p></div>
            </div>
           

            </div>
            
           
            <div className='mt-4'>
                <input onChange={event => setMessage(event.target.value)} onKeyDown={handleKeyDown} id="textbox" className='mt-4' style={{width:"100%"}} placeholder="نام کالا را وارد کنید"></input>
            </div>
        </div>
       
        
        </>
        
        
    )
}


export default Home 