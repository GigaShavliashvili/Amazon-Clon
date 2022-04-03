
import React,{useState} from 'react'
import { Link,useNavigate   } from 'react-router-dom'
import AmazonLogo  from "../../Assets/Amazon_Logo.png"
import Button from "../../Component/Button/Button"

import "../Login/login.scss"
import { useDispatch, useSelector } from 'react-redux'
import { registerInitiat } from '../../Redux/Action'
import { useEffect } from 'react'
/* import { auth } from '../../Configs/firebase' */
/* import { createUserWithEmailAndPassword } from 'firebase/auth' */
const Register = () => {
const Navigate= useNavigate() 
const[email, setEmail] = useState()
const[password, setPassword] = useState()
const[repassword, setRePassword] = useState()
const[error, setError] = useState(null)
    const dispatch = useDispatch();

  const user = useSelector(state => state.register)

useEffect(() =>{
  if(user.user){
  Navigate("/")
}else
if(user.error){
  setError(user.error.message.slice(9))
}
},[user])

 const handelSubmit =  (e) =>{
     e.preventDefault();
dispatch(registerInitiat(email, password))


 /*    try{
        const passwordLength  = password.length;
        if(password !== repassword){
            console.log("password dont match");
        }
        if(passwordLength < 6){
            console.log("at least 6 characters");
        }
        const user = createUserWithEmailAndPassword(auth,email,password);
        console.log(user);
    
    }catch (error){
        console.log("error has occured");
    } */
} 

  return (
  <div className='Login'>
        <div className='Login__Header'>
  <Link to="/">
          <img src={AmazonLogo} alt="" />
          </Link>
        </div>
        <div className='Login-center' style={{display:"flex", justifyContent:"center"}}>
        <div className='Login__Wrapper'>
        <div className='Login__Wrapper__Content'>
  <h1>Create account</h1>
 {error ? <p style={{color:"red"}}>{error}</p> : null}  
            <form action="submit" onSubmit={(e) =>handelSubmit(e)}>
                 <h5>Your name</h5>
      <input type="text" name="name"  />
             <h5>Mobile number or email</h5>
      <input type="text" name="email"  onChange={(e) => setEmail(e.target.value)}/>
                 <h5>Password</h5>
      <input type="password" placeholder='at least 6 characters'  name="password"  
      onChange={(e) => setRePassword(e.target.value)}
        />
                <p style={{marginTop:"0"}}> ! Passwords must be at least 6 characters.</p>
                      <h5>Re-enter password</h5>
      <input type="password" name="password"  onChange={(e) => setPassword(e.target.value)}/>
               <Button type="submit" className="LoginBtn">Continue</Button>
                 <p>By continuing, you agree to Amazon's <a href="">Conditions of Use</a>  and <a     href="">Privacy Notice.</a></p>
            </form>
            <p style={{fontSize:"13px" ,marginTop:"20px"}}>Already have an account? <a href="">sign in{">"}</a> </p>
             <p style={{fontSize:"13px"}}>Buying for work? <a href="">Create a free business account{">"}</a> </p>
          </div>
        </div>
        </div>
        <div className='Footer'>
            <div className='row1'>
                <li onClick={() => dispatch(test)}>Conditions of Use</li>
                <li>Privacy Notice</li>
                  <li>Help</li>
            </div>
            <div className='row2'>
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    </div>
  )
}

export default Register