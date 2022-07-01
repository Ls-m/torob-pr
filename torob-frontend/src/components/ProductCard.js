
import React from 'react';
import { Link } from "react-router-dom";


const ProductCard = (props) =>{
    const a = props.value;
    //const dispatch = useDispatch();
    return(
        <>
        {/* <div>{a.price}</div> */}
        <div className="col-4">
            <div className='card p-4 my-2'>
                <div className='text-center' style={{"margin": "0 auto", "width": "80%"}}>
                    <img src={a.img} />
                </div>
                <div style={{"minHeight":"70px"}}>
                    <Link to={`/products/${a.id}`} className='text-decoration-none text-dark'>
                        <h6>{a.name}</h6>
                    </Link>
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