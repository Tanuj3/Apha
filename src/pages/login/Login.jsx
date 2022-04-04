import { useContext, useRef } from 'react';
import './login.css'
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Login() {

  const email = useRef()
  const password = useRef()
  const {user,isFetching,error,dispatch}= useContext(AuthContext);


  const handleClick = (e) => {
    e.preventDefault();
   
   loginCall({email:email.current.value,password:password.current.value},dispatch)
  }

  console.log(user)



  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Name Here</h3>
          <span className="loginDesc">Connect with Official around you</span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input placeholder='Email' type="email" className="loginInput" ref={email} required />
            <input placeholder='Password' type="password" className="loginInput"  ref={password} required/>
            <button className="loginButton" disabled={isFetching}>{isFetching?<CircularProgress color='inherit'/>:"Login"}</button>
            <span className="loginForgot">Forget Password?</span>
           <Link to="/register"> <button className="loginRegister" disabled={isFetching} >{isFetching?<CircularProgress color='inherit'/>:"Create a New Account"}</button></Link>
          </form>
        </div>
      </div>

    </div>
  )
}
