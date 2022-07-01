import { useState } from 'react';
function ShowAndHidePassword(){

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =(evnt)=>{
        evnt.preventDefault();
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(

            
        <div className="input-group my-4">
            <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
            <div className="input-group-btn">
                <button className="btn btn-outline-primary" onClick={togglePassword}>
                { passwordType==="password"? <i class="fa-solid fa-eye"></i> :<i class="fa-solid fa-eye-slash"></i> }
                </button>
            </div>
        </div>
                
      
    )

}
export default ShowAndHidePassword;