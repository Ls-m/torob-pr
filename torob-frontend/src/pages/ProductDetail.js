import React from 'react';
import { useParams } from "react-router";
import { useState,useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [minPrice,setMinPrice] = useState(100);
    const [maxPrice,setMaxPrice] = useState(0);
    const [price,setPrice]=useState("");
    //let navigate = useNavigate();
   // console.log(id);


    const getProduct =async()=>{
        //console.log("checking with db")
        let answer = await axios.get('http://localhost:8080/api/products');
        let allProducts = answer.data.products;
        const p = allProducts.find((p)=>p.id==id)
        setProduct(p);
        //console.log(p.price);

        product.shopPrice.forEach((p) => {
            if(p.price>maxPrice) setMaxPrice(p.price)
            if(p.price<minPrice) setMinPrice(p.price);
        });
        let tmp = ''+minPrice;
        //console.log(tmp)
        if(maxPrice!== minPrice) tmp = minPrice+"-"+maxPrice;
        setPrice(tmp);
    
    
    
        
    }
    
    getProduct();
   
   

    return (
        // <div>{id}</div>
        <>
            <Header></Header>
        
            <div className='d-flex m-4 p-4' style={{ "backgroundColor": "white" }}>
                <div className='col-3'>
                    <img src={product.img} />
                </div>
                <div className='d-flex flex-column' style={{ "maxWidth": "40%" }}>
                    <div className='m-2'>
                        <h2>{product.name}</h2>
                    </div>
                    <div>
                        <h2>R$ {price}</h2>
                    </div>
                    <button className="btn btn-success mt-2" type="button">خرید</button>
                    <button className="btn btn-primary mt-2" type="button">اطلاعات بیشتر</button>

                </div>
            </div>

            
        </>

    );

}

export default ProductDetail