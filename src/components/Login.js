import React from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/Registeration.css';

export default function Login() {
   
   return (<div className="container register">
        <div className="row">
            <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3>Welcome</h3>

                <Link to="/sign-up"><input type="submit" name="" value="Register" /><br /></Link>
            </div>
            <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row register-form">
                            <div className="col-md-6 position">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                            </div>
                            <Link to="/home"> 
                           <input type="submit" className="btnRegister" value="Login" />
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}
