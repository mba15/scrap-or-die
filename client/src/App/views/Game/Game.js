// App/views/Game/index.js

//dependencies
import React from 'react';

//component
import MenuContainer from './MenuContainer/MenuContainer.js';

//styling
import './Game.css';

const Game = () => (
    <div className='game-wrapper'>
        <MenuContainer>
            Menu
        </MenuContainer>
    </div>
)

export default Game;