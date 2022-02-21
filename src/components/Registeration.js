import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheet/Registeration.css';

function Registeration() {

    const initialValues = { firstName: "", lastName: "", password:"", email: "", phone: "", confirmPassword:"", securityAnswer:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);


    //Validation Function
    const validate = (values) => {
        const errors = {};
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
        const phonere = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        if (!values.firstName) {
            errors.firstName = "Firstname Is Required!";
        } else if (values.firstName.length < 2) {
            errors.firstName = "Firstname cannot be a single character";
        }


        if (!values.lastName) {
            errors.lastName = "Lastname Is Required!";
        } else if (values.lastName.length < 2) {
            errors.lastName = "lastname cannot be a single character";
        }


        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 12) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Confirm password not matched!";
        }else if (values.confirmPassword.length < 4) {
            errors.confirmPassword = "Password must be more than 4 characters";
        } else if (values.confirmPassword.length > 12) {
            errors.confirmPassword = "Password cannot exceed more than 10 characters";
        }

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }

        if (!values.phone) {
            errors.phone = "PhoneNo is required!";
        } else if (phonere.test(values.phone)) {
            return true;
        } else if (!phonere.test(values.phone)) {
            errors.phone = "Not a valid Phone Number!";
        }
        if (!values.securityAnswer) {
            errors.securityAnswer = "Security Answer is required!";
        } 

        return errors;
    }
    return (
        <div className="container register">
          
            
            {Object.keys(formErrors).length === 0 && isSubmit?<div><p>Succesfully Registered :)</p></div>:""}
          
          
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
                                            <input type="text" className="form-control" name='lastName' placeholder="Last Name *" value={formValues.lastName} onChange={handleChange} />
                                        </div>
                                        <p>{formErrors.lastName}</p>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name='password' placeholder="Password *" value={formValues.password} onChange={handleChange} />
                                        </div>
                                        <p>{formErrors.password}</p>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name='confirmPassword' placeholder="Confirm Password *"  value={formValues.confirmPassword} onChange={handleChange}/>
                                        </div>
                                        <p>{formErrors.confirmPassword}</p>
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
                                            <input type="email" className="form-control" name='email' placeholder="Your Email *" value={formValues.email} onChange={handleChange}/>
                                        </div>
                                        <p>{formErrors.email}</p>
                                        <div className="form-group">
                                            <input type="text" name="txtEmpPhone" className="form-control" name='phone' placeholder="Your Phone *" value={formValues.phone} onChange={handleChange} />
                                        </div>
                                        <p>{formErrors.phone}</p>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden" disabled>Please select your Security Question</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name='securityAnswer' placeholder="Enter Your Answer *"  value={formValues.securityAnswer} onChange={handleChange} />
                                        </div>
                                        <p>{formErrors.securityAnswer}</p>
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