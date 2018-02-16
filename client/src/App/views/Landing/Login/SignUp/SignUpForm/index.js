// App/views/Landing/Login/SignUp/SignUpForm/index.js

//dependencies
import React, { Component } from 'react';

//styling
import './SignUpForm.css';

class SignUpForm extends Component {
    render() {
        let { }
        return (
            <div className="SignUpForm-wrapper">
                <form className='regForm-container' onSubmit={props.handleSubmit}>
                    <h2 className='regForm-title'>Scrape or Die!!!</h2>
                    <h3 className='regForm-subtitle'>Sign up today -- it's free.</h3>
                    <div className='regForm-inputs'>
                        <label htmlFor='firstName'>First Name</label>
                        <input value={props.firstName} name="firstName" type='text' />
                        <label htmlFor='lastName'>Last Name</label>
                        <input value={props.lastName} name="lastName" type='text' />
                        <label htmlFor='email'>Email</label>
                        <input value={props.email} name="email" type='text' />
                        <label htmlFor='password'>Password (8 or more characters)</label>
                        <input value={props.password} name="password" type='password' />
                        <span className='agreement'>By clicking Join now, you agree to the BitClock User Agreement, Privacy Policy, and Cookie Policy.</span>
                        <input className='reg-button' type='submit' value='Join Now' />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;