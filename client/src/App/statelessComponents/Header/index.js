// App/components/Header/index.js

//dependenies
import React from 'react';

//components
import Navbar from './Navbar';

//styling
import './Header.css';

const Header = () => (
    <div className='header-wrapper'>
        <Navbar />
        <h1 className='header-title'>Scrap or Die!!!</h1>
    </div>
)

export default Header;