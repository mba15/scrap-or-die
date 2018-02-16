// App/components/Header/Navbar/index.js

//dependenies
import React from 'react';
import { Link } from 'react-router-dom';

//styling
import './Navbar.css';

const Navbar = () => (
    <div className='navbar-wrapper'>
        <Link to='landing'>Landing</Link>
        <Link to='profile'>Profile</Link>
        <Link to='game'>Game</Link>
    </div>
)

export default Navbar;