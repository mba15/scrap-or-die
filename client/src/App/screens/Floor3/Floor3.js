import React from 'react';

import './Floor3.css';

import background3 from './background3.jpg';
import character from './character.png';
import dolphin from './evil_dolphin.png';
import bob from './bob.jpg';
import sam from './sam.jpg';

const Floor3 = () => (
    <div className='floor3-wrapper'>
    <h1>V School: 3rd Floor</h1>
        <img className='background3' src={background3} alt='Level 3' />
        <img className='character' src={character} alt='Character' />
        <img className='dolphin' src={dolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='sam' src={sam} alt='Sam' />
    </div>
)

export default Floor3;