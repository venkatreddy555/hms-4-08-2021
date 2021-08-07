import React, { useState } from 'react';
import HCheckbox from '../../atoms/Checkbox';
import HInput from '../../atoms/Input';
import HButton from '../../Button';

type User = {
    email: string,
    password: string,
}

const Login= ()=>{
    const [user, setUser] = useState({email: '', password: ''});

    const handleUser = (value: string, key: 'email' | 'password') => {
        const tempUser: User = { ...user};
        tempUser[key] = value;
        setUser({...tempUser});
    }

    
    return <> 
    <div className="app-container">
            <div className="h-100">
                <div className="h-100 no-gutters row">
                    <div className="d-none d-lg-block col-lg-4">
                        <div className="slider-light">
                            <div className="slick-slider">
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate" tabIndex={-1}>
                                        <div className="slide-img-bg"></div>
                                        <div className="slider-content">
                                            <h3>Perfect Balance</h3>
                                            <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive
                                                collection of unified React Boostrap Components and Elements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark" tabIndex={-1}>
                                        <div className="slide-img-bg"></div>
                                        <div className="slider-content">
                                            <h3>Scalable, Modular, Consistent</h3>
                                            <p>Easily exclude the components you don't require. Lightweight, consistent
                                                Bootstrap based styles across all elements and components
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning" tabIndex={-1}>
                                        <div className="slide-img-bg"></div>
                                        <div className="slider-content">
                                            <h3>Complex, but lightweight</h3>
                                            <p>We've included a lot of components that cover almost all use cases for any type of application.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                        <div className="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                            <div className="app-logo"></div>
                            <h4 className="mb-0">
                                <span className="d-block">Welcome back,</span>
                                <span>Please sign in to your account.</span>
                            </h4>
                            <h6 className="mt-3">No account? <a href="javascript:void(0);" className="text-primary">Sign up now</a></h6>
                            <div className="divider row"></div>
                            <div>
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <HInput onChange={(value) => handleUser(value, 'email')} id="login_email" type="email" label="Email" placeholder="Enter Email"/>
                                        </div>
                                        <div className="col-md-6">
                                        <HInput id="login_password" onChange={(value)=> handleUser(value,'password')} label="Password" placeholder="Enter Password" type="password"/>
                                        </div>
                                    </div>
                                    <HCheckbox onChange={() => {}} label="Check" id="LoginCheck"/>
                                    <div className="divider row"></div>
                                    <div className="d-flex align-items-center">
                                        <div className="ml-auto">
                                            <a href="javascript:void(0);" className="btn-lg btn btn-link">Recover Password</a>
                                           <HButton  onClick={() => {
                                               
                                           }}>
                                              Login
                                           </HButton>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
} 

export default Login;