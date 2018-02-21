import React from 'react';

import './Menu_Container.css';

const MenuContainer = ({ children, style }) => (
    <div className="menu" style={style}>
        {children}
        <MenuSelect />
    </div>
)

export default MenuContainer;