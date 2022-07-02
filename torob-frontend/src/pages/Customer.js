import React from 'react'
import Cookies from 'universal-cookie';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';



const Customer = (props)=>{
    //const [token, setToken] = useState([]);
    const [user,setUser] = useState([]);
    const [favs,setFavs] = useState([]);
    const [products, setProducts] = useState([]);
    const objt = {
    }
    const arrobj = [objt]
    let glob = [];
    const [res, setRes] = useState(arrobj);
    const cookies = new Cookies();
    const myToken = cookies.get('loginToken')
    //setToken(myToken)

    // const getUsers =async()=>{
    //     //console.log("checking with db")
    //     let answer = await axios.get('http://localhost:8080/api/users');
    //     let allUsers = answer.data.users;;
    //     const u = allUsers.find((user)=>user.token === myToken);
    //     if(u) setUser(u);
    //     //console.log(u.username)
    //     //console.log(allProducts);
    
        
    //   }
      


    // const getProducts =async()=>{
    //     //console.log("checking with db")
    //     let answer = await axios.get('http://localhost:8080/api/products');
    //     let allProducts = answer.data.products;
    //     setProducts(allProducts);
    //     //console.log(allProducts);
    
        
    //   }
    
    // const findFavs = ()=>{
    //     const a = user.favorites;
    //     setFavs(a);


    // }
   

   const favPro=()=>{
    console.log(favs);
    console.log(products);
    favs.forEach((f)=>{
        products.forEach((p)=>{
            if(f==p.id)
            setRes(p);
        })
    })
    // for (let i = 0; i < products.length; i++) {
    //     for(let j=0;j<favs.length;j++){
    //         if(products[i].id === favs[i]){
    //             setRes(products[i]);

    //         }
    //     }
    //   }

   }
   
   

//    useEffect(async() => {
    
//     // getProducts();
//     // findFavs();
//     // favPro();
    
    
//   });
  useEffect(() => {
    (async () => {
        let answer = await axios.get('http://localhost:8080/api/users');
        let allUsers = answer.data.users;;
        const u = allUsers.find((user)=>user.token === myToken);
        console.log(myToken)
        if(u) {setUser(u);setFavs(u.favorites );console.log(u.favorites)}
        let answer2 = await axios.get('http://localhost:8080/api/products');
        let allProducts = answer2.data.products;
        
        console.log(allProducts.length)
       
        for (let i = 0; i < u.favorites.length; i++) {
                for(let j=0;j<allProducts.length;j++){
                    if(allProducts[j].id === u.favorites[i]){
                        //let t = [];
                        glob.push(allProducts[j]);
                        setRes(glob);
                        break;
        
                    }
                }
              }
        
 

        console.log(res);

       
    })();
  }, []);

  
  
    
    return(
        <>
        {/* <div>hi</div> */}
        <Header></Header>
        {/* <div style={{backgroundColor:"#f2f3f5"}}>
            
        </div> */}
        

        <div className="container pt-5" >
            <div>کالاهای مورد علاقه</div>
            <div className="row gx-5">
            {
                res.map(
                    (item) => {
                        
                       
                         return(<ProductCard value={item} note={"no"}/>);
                       // return(<div>{item.name}</div>)
                    }

                )
                

            }
            

            </div>
        </div>
       
        
        </>
        
        
    )
}


export default Customer 