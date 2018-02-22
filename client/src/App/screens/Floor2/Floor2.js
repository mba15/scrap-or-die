import React from 'react';

import './Floor2.css';

import background2 from './background2.jpg';
import character from './character.png';
import dolphin from './evil_dolphin.png';
import bob from './bob.jpg';
import celeste from './celeste.jpg'; 

const Floor2 = () => (
    <div className='floor2-wrapper'>
        <h1 className='level-name'>V School: 2nd Floor</h1>
        <img className='background2' src={background2} alt='Level 2' />
        <img className='character' src={character} alt='Character' />
        <img className='dolphin' src={dolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='celeste' src={celeste} alt='Celeste' />
    </div>
)

export default Floor2;