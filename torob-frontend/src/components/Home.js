import React from 'react'
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';




const Home = (props)=>{
    const [recent, setRecent] = useState([]);
    let navigate = useNavigate();
    const onClickHandler=()=>{
        navigate('/search')
        console.log('clicked');
    }
    
    return(
        <>
        <div>
            Home
        </div>
        </>
        
        
    )

}


export default Home 