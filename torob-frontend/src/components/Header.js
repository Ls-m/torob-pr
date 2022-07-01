import React from 'react'
import { useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import ShowAndHidePassword from './ShowAndHidePassword';
import $ from 'jquery';
import axios from 'axios';
import Cookies from 'universal-cookie';

//const answer = await axios.get('http://localhost:8080/api/users');



const Header = (props) => {
    
    
    const [recent, setRecent] = useState([]);
    const [emailError, setEmailError] = useState("");
    const [closeModal, setCloseModal] = useState("");
    const [users, setUsers] = useState([]);
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

  const checkWithDb =async()=>{
    //console.log("checking with db")
    let answer = await axios.get('http://localhost:8080/api/users');
    let allUsers = answer.data.users;
    setUsers(allUsers);

    
  }
  checkWithDb();

  const updateTokenDb = async(username,token1)=>{
    var Url = 'http://localhost:8080/api/users/'+username;
    await axios.put(Url, {
        token:token1,
        
    }).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const tokenGenerator=(length)=> {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
const navMobile = ()=>{
    navigate('/mobiles');

}
const navLaptop = ()=>{
    navigate('/laptops');

}

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
    } else {

        if (regex.test(message)){
            console.log("from rege "+message);
            setEmailError("");
            
        }
        else{
            console.log("from else "+message);
            setEmailError("ایمیل وارد شده معتبر نیست.")
        }

    }
    

    var passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var passVal = $("#password-field").val();

    if( passVal === "" ){
        $("#password-field-err").text("پر کردن این فیلد الزامی ست.");
    } else {

        if( passRegex.test(passVal)){
            $("#password-field-err").text("");
        } else {
            $("#password-field-err").text("پسورد می‌بایست شامل حداقل ۸ کاراکتر، یک حرف و یک عدد انگلیسی باشد.");
        }

    }

    if($("#password-field-err").val() ==="" && emailError===""){
        console.log("let's see...");
        const user1 = users.find((user)=>(user.email===message && user.password ===passVal));
            if(user1){
                console.log("user found");
                const token = tokenGenerator(16);
                updateTokenDb(user1.username,token);
                const cookies = new Cookies();
                cookies.set('loginToken', token, { path: '/' });
                if(user1.role=="customer")navigate('/customer');
                else navigate('/seller');
                setCloseModal("modal");


            }else{
                console.log("user not found");
                $("#general-error-message").text("کاربری با مشخصات فوق پیدا نشد.");
            }
        
       
        

       
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
                    <div className='d-flex align-items-center'>
                        <button className="btn btn-light" onClick={navMobile}>
                            موبایل و تبلت
                        </button>
                        <button className="btn btn-light" onClick={navLaptop}>
                            لپ تاپ
                        </button>
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
                                <ShowAndHidePassword/>
                                <p style={{color:"red"}} id="general-error-message"></p>
                                
                            </form>
                            <button id="hhjjk" className="btn btn-primary mb-3 " data-bs-dismiss={closeModal} onClick={handleSubmit}>ورود</button>

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