import './register.css'
import { useRef } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
export default function Register() {


  const username = useRef()
  const email = useRef()
  const password = useRef()
  const passwordAgain = useRef()
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
   if(passwordAgain.current.value!==password.current.value){
     password.current.setCustomValidity("Passoword Don't Match!!")
   }else {
     const user= {
       username:username.current.value,
       email:email.current.value,
       password:password.current.value
     }
try {
     await axios.post("/auth/register/",user)
     navigate('/login');
}
catch(err) {
    console.log(err)
}
   }
   
  }

  return (
    <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Name Here</h3>
                    <span className="loginDesc">Connect with Officials around you</span>
                </div>
                <div className="loginRight" >
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder='Username' required ref={username}  className="loginInput" />
                        <input placeholder='Email'  required ref={email} type="email" className="loginInput" />
                        <input type="password"   ref={password} required placeholder='Password' className="loginInput" />
                        <input type="password" placeholder='Confirm Password' required ref={passwordAgain} className="loginInput" />
                        <button className="loginButton" type='submit'>Sign Up</button>
                        <Link to="/login">
                        <button className="loginRegister">Log into Account</button>
                        </Link>
                    </form>
                </div>
            </div>

    </div>
  )
}
