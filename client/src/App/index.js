// App/index.js

//dependencies
import React from 'react';

//screens
import Header from './shared/Header';
import ScreenRouter from './screens/ScreenRouter';
import Menu from './shared/Menu/Menu';

//styling
import './index.css';

const App = () => {
    return (
        <div>
            <Header />
            <ScreenRouter />
            <Menu />
        </div>
    )
}

export default App;