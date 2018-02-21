// App/screensLanding/Login/SignUp/SignUpForm/index.js

//dependencies
import React, { Component } from 'react';

//styling
import './SignUpForm.css';

class SignUpForm extends Component {
    render() {
        return (
            <div className="SignUpForm-wrapper">
                <form className='regForm-container'>
                    <h2 className='regForm-title'>Scrape or Die!!!</h2>
                    <h3 className='regForm-subtitle'>Sign up today -- it's free.</h3>
                    <div className='regForm-inputs'>
                        <label htmlFor='firstName'>First Name</label>
                        <input value={this.firstName} name="firstName" type='text' />
                        <label htmlFor='lastName'>Last Name</label>
                        <input value={this.lastName} name="lastName" type='text' />
                        <label htmlFor='email'>Email</label>
                        <input value={this.email} name="email" type='text' />
                        <label htmlFor='password'>Password (8 or more characters)</label>
                        <input value={this.password} name="password" type='password' />
                        <span className='agreement'>By clicking Join now, you agree to the BitClock User Agreement, Privacy Policy, and Cookie Policy.</span>
                        <input className='reg-button' type='submit' value='Join Now' />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;