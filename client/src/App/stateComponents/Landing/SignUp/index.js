// App/views/Landing/Login/SignUp/index.js

//dependencies
import React, { Component } from 'react';
import { connect } from "react-redux";
import { signup } from "../../../../redux/auth/auth";

//components
import SignUpForm from './SignUpForm.js';

class SignUp extends Component {
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
            <SignUpForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.inputs} />
        )
    }
}

export default connect(null, { signup })(SignUp);