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
        <div style={{backgroundColor:"#f2f3f5"}}>
            Home
            <button type="button" className="btn btn-primary">Primary</button>
        </div>
       
        
        </>
        
        
    )
}


export default Home 