// App/components/Header/Navbar/index.js

//dependenies
import React from 'react';
import { Link } from 'react-router-dom';

//styling
import './Navbar.css';

const Navbar = () => (
    <div className='navbar-wrapper'>
        <Link to='Login'>Login</Link>
        <Link to='Profile'>Profile</Link>
        <Link to='Game'>Game</Link>
    </div>
)

export default Navbar;