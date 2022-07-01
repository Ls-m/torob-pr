import React from 'react'
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import ShowAndHidePassword from './ShowAndHidePassword';


const Header = (props) => {
    const [recent, setRecent] = useState([]);
    const [emailError, setEmailError] = useState("");
    let navigate = useNavigate();
    const onClickHandler = () => {
        navigate('/search')
        console.log('clicked');
    }
    const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleSubmit = ()=>{
    //evnt.preventDefault();
    console.log('value after submit is:', message);
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     
    if(message===""){
        console.log("empty!");
        setEmailError("پر کردن این فیلد الزامی است.")
        // setEmailError(()=>{
        //     emailError = "پر کردن این فیلد الزامی است."
        // })
    }
    if (regex.test(message)){
        console.log("from rege "+message);
        setEmailError("");
        
    }
    else{
        console.log("from else "+message);
        setEmailError("ایمیل وارد شده معتبر نیست.")
    }
  }
  

    return (
        <>
            <div style={{ backgroundColor: "white", height: "40px" }}>
                <div style={{ maxWidth: "1180px", margin: "0px auto" }} className="d-flex justify-content-between align-items-center flex-row-reverse">
                    <div>
                        <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#signIn">ورود</button>
                        <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#signUp">ثبت نام</button>
                    </div>
                    <div>
                        <span>
                            t1
                        </span>
                        <span>
                            t1
                        </span>
                        <span>
                            t1
                        </span>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="signIn" tabindex="-1" data-bs-backdrop="static" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                           ورود به حساب کاربری

                            <form noValidate>
                                <div class="mb-3">
                                    <label>ایمیل</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange}/>
                                    <p style={{color:"red"}} id="emailText">{emailError}</p>
                                </div>
                                <ShowAndHidePassword />
                                
                            </form>
                            <button id="hhjjk" className="btn btn-primary mb-3" onClick={handleSubmit}>ورود</button>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="signUp" tabindex="-1" data-bs-backdrop="static" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ثبت نام
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                        </div>
                    </div>
                </div>
            </div>




        </>


            )

}


export default Header 