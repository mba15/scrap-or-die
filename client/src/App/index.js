// App/index.js

//dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//views
import Game from './stateComponents/Game';
import Landing from './stateComponents/Landing';
import SignUp from "./stateComponents/Landing/SignUp";
import Login from "./stateComponents/Landing/Login";
import Profile from './stateComponents/Profile';

//components
import Header from './statelessComponents/Header';

//styling
import './index.css';

const App = () => (
    <div className='app-wrapper'>
        <Header />
       
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />  <Route path="/game" component={Game} />
        </Switch>
        {/* <Footer /> */}
    </div>
)

export default App;