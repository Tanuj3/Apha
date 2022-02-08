import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/Registeration.css';

 function Registeration() {
    
    

    const initialValues= {firstName:"",lastName:""}
    const [formValues,setFormValues]=useState(initialValues)
    const [formErrors,setFormErrors]=useState({})
    const [isSubmit,setIsSubmit]=useState(false)

    const handleChange=(e)=>{

        const{name,value} = e.target
        setFormValues({...formValues,[name]:value})
    
    }


    const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)

    }

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }


    },[formErrors])


    //Validation Function
    const validate=(values)=>{

        const errors={}
        const emailRegex=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i

        if(!values.firstName){
            errors.firstName="FirstName Is Required";
        }

        return errors;

    }
    

    return (<div className="container register">
        
        <div className="row">
            <div className="col-md-3 register-left">
                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                <h3>Welcome</h3>

               <Link to="/login"> <input type="submit" name="" value="Login" /></Link><br />
            </div>
            <div className="col-md-9 register-right">
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <form onSubmit={handleSubmit}>
                        <div className="row register-form">
                            <div className="col-md-6">
                      
                                <div className="form-group">
                                    <input type="text" className="form-control" name='firstName' placeholder="First Name *" value={formValues.firstName} onChange={handleChange} />
                                </div>
                                <p>{formErrors.firstName}</p>
                                <div className="form-group">
                                    <input type="text" className="form-control" name='lastName'placeholder="Last Name *" value={formValues.lastName} onChange={handleChange} />
                                </div>  
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password *" />
                                </div>
                                <div className="form-group">
                                    <div className="maxl">
                                        <label className="radio inline">
                                            <input type="radio" name="gender" value="male" defaultChecked />
                                            <span> Male </span>
                                        </label>
                                        <label className="radio inline">
                                            <input type="radio" name="gender" value="female" />
                                            <span> Female </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmpPhone" className="form-control" placeholder="Your Phone *" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option className="hidden"  disabled>Please select youra Security Question</option>
                                        <option>What is your Birthdate?</option>
                                        <option>What is Your old Phone Number</option>
                                        <option>What is your Pet Name?</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your Answer *" />
                                </div>
                               <button className='btnRegister' >Register</button> 
                            </div>
                           
                        </div>
                        </form>
                    </div>
                   
                    </div>
                </div>
                
            </div>
        </div>

   );
}

export default Registeration;