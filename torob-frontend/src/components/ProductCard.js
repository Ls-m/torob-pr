
import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useState } from 'react';


const ProductCard = (props) =>{
    const a = props.value;
    const [user,setUser] = useState({});
    const [show,setShow] = useState(true);
    const cookies = new Cookies();
    const myToken = cookies.get('loginToken');
    // if(props.note){
    //     setShow(false);


    // }
    //console.log(a.id);
    //const dispatch = useDispatch();
    // useEffect(() => {
    //     (async () => {
           
            

    
           
    //     })();
    //   }, []);

    const addFavDb=async()=>{
        
        if(myToken){
            console.log("fav clicked")
            let answer = await axios.get('http://localhost:8080/api/users');
            let allUsers = answer.data.users;;
            const u = allUsers.find((user)=>user.token === myToken);
            console.log(myToken)
            if(u) {setUser(u);}
            console.log(u.username)
    
            let Url = 'http://localhost:8080/api/users/updateFav/'+u.username
                await axios.put(Url, {
                    favorite:a.id,
                    
                }).then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log("errrrr");
                  });

        }
       
    }
    return(
        <>
        {/* <div>{a.price}</div> */}
        <div className="col-4">
            <div className='card p-4 my-2'>
                <div className='text-center' style={{"margin": "0 auto", "width": "80%"}}>
                    <img src={a.img} />
                </div>
                <div className='d-flex justify-content-between align-items-center' style={{"minHeight":"70px"}}>
                    
                    <Link to={`/products/${a.id}`} className='text-decoration-none text-dark'>
                        <h6>{a.name}</h6>
                    </Link>
                    <button className="btn btn-outline-danger" type="button" onClick={addFavDb}>افزودن به علاقه‌مندی</button>
                    {/* <a href="../pages/Product/" className='text-decoration-none text-dark'>
                        <h6>{a.title}</h6>
                    </a> */}
                </div>
                
                <div className='d-flex justify-content-between'>
                    <div>
                        {a.price}
                    </div>
                    <div>
                        {a.size}
                    </div>
                    
              
                </div>
                <button className="btn btn-success mt-2" type="button" >خرید</button>
                
                {/* onClick={() => dispatch(add(a))}
                 */}
                

            </div>
            

        </div>
            
        </>
        

    );

}

export default ProductCard