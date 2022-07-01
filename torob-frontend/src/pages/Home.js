import React from 'react'
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Header from '../components/Header';


const Home = (props)=>{
    const [recent, setRecent] = useState([]);
    let navigate = useNavigate();
    const onClickHandler=()=>{
        navigate('/search')
        console.log('clicked');
    }
    
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
                <input className='mt-4' style={{width:"100%"}} placeholder="نام کالا را وارد کنید"></input>
            </div>
        </div>
       
        
        </>
        
        
    )
}


export default Home 