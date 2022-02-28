import './login.css'

export default function Login() {
  return (
    <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Tanuj Social</h3>
                    <span className="loginDesc">Connect with friends around you</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forget Password?</span>
                        <button className="loginRegister">Create a New Account</button>
                    </div>
                </div>
            </div>

    </div>
  )
}
