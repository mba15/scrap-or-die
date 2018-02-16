// App/index.js

//dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//views
import Game from './views/Game';
import Landing from './views/Landing';
import Profile from './views/Profile';

//components
import Header from './components/Header';

//styling
import './index.css';

const App = () => (
    <div className='app-wrapper'>
        <Header />
        <Switch>
            <Route exact path="/" component={Landing}>Landing</Route>
            <Route path="/profile" component={Profile}>Profile</Route>
            <Route path="/game" component={Game}>Game</Route>
        </Switch>
        {/* <Footer /> */}
    </div>
)

export default App;