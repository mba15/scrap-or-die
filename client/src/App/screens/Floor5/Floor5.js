import React from 'react';

import './Floor5.css';

import background5 from './background5.jpg';
import character from './character.png';
import dolphin from './evil_dolphin.png';
import dolphinPants from './dolphinPants.jpg';
import bob from './bob.jpg';
import ben from './ben.jpg'; 

const Floor5 = () => (
    <div className='floor5-wrapper'>
        <h1 className='level-name'>V School: 5th Floor</h1>
        <img className='background5' src={background5} alt='Level 5' />
        <img className='character' src={character} alt='Character' />
        <img className='dolphin' src={dolphin} alt='Evil Dolphin' />
        <img className='dolphinPants' src={dolphinPants} alt='Dolphin Pants' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='ben' src={ben} alt='Ben' />
    </div>
)

export default Floor5;