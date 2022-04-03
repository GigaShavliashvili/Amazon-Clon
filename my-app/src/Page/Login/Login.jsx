
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AmazonLogo  from "../../Assets/Amazon_Logo.png"
import Button from "../../Component/Button/Button"
import "./login.scss"
import { useDispatch, useSelector } from 'react-redux'
import { logininitial } from '../../Redux/Action'
import { useEffect,useState } from 'react'

const Login = () => {


  const dispatch = useDispatch();
const Navigate = useNavigate() 
const[email, setEmail] = useState()
const[password, setPassword] = useState()
const[error, setError] = useState()

  const user = useSelector(state => state.register)

useEffect(() =>{
  if(user.user){
  Navigate("/")
}else
if(user.error){
  setError(user.error.message.slice(9))
}

},[user])

const handelSubmit = (e) =>{
     e.preventDefault();
     dispatch(logininitial(email, password))
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
  <h1>Sing in</h1>
{user.error ?  <p style={{color:"red"}}>{error}</p> : null}
            
            <form action="submit" onSubmit={(e) => handelSubmit(e)}>
                     <h5>Email or mobile phone number</h5>
                <input type="text" name="login" onChange={(e) => setEmail(e.target.value)} />
                       <h5>password</h5>
                 <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
               <Button type="submit" className="LoginBtn">Continue</Button>
                 <p>By continuing, you agree to Amazon's <a href="">Conditions of Use</a>  and <a href="">Privacy Notice.</a></p>
                     <span > <a href="">{`>`} Need Help</a></span>
            </form>
          </div>
        <div className='Login__Wrapper__Content2'>
           <p className='lineword'>New to Amazon?</p>
           <Link to="/register">
            <Button className="Cont2Btn">Create your Amazon account
</Button>
           </Link>
           
        </div>
        </div>
        </div>
        <div className='Footer'>
            <div className='row1'>
                <li> <a href="">Conditions of Use</a></li>
                <li> <a href="">Privacy Notice</a> </li>
                  <li> <a href="">Help</a></li>
            </div>
            <div className='row2'>
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    </div>
  )
}

export default Login