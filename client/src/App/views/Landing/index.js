// App/views/Landing/index.js

//dependencies
import React from 'react'

//components
import Login from './Login';

//styling
import './Landing.css';

const Landing = () => (
    <div className='landing-body'>
        <h1>Landing Page</h1>
        <Login />
    </div>
)

export default Landing;