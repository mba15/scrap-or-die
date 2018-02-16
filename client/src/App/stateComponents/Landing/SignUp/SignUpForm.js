//App/views/Landing//SignUp/SignUpForm/index.js

//dependencies
import React, { Component } from 'react';

//styling
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // This is where we will call our signup function from redux
        this.props.signup(this.state.inputs);
        console.log(this.state.inputs);
        alert(JSON.stringify(this.state.inputs));
        this.clearInputs();
    }
    render() {
        return (
            <div className="SignUpForm-wrapper">
                <form className='regForm-container' onSubmit={this.handleSubmit}>
                    <h2 className='regForm-title'>Scrap or Die!!!</h2>
                    <h3 className='regForm-subtitle'>Sign up today -- it's free.</h3>
                    <div className='regForm-inputs'>
                        <label htmlFor='firstName'>Username</label>
                        <input onSubmit={this.handleSubmit} value={this.username} name="username" type='text' />
                        <label htmlFor='password'>Password (8 or more characters)</label>
                        <input onSubmit={this.handleSubmit} value={this.password} name="password" type='password' />
                        <span className='agreement'>By clicking Join now, you agree to the BitClock User Agreement, Privacy Policy, and Cookie Policy.</span>
                        <input className='reg-button' type='submit' value='Join Now' />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;