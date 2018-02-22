import React from 'react';

import './Floor4.css';

import background4 from './background4.jpg';
import character from './character.png';
import dolphin from './evil_dolphin.png';
import bob from './bob.jpg';
import amy from './amy.jpg'; 

const Floor4 = () => (
    <div className='floor4-wrapper'>
        <h1 className='level-name'>V School: 4th Floor</h1>
        <img className='background3' src={background4} alt='Level 4' />
        <img className='character' src={character} alt='Character' />
        <img className='dolphin' src={dolphin} alt='Evil Dolphin' />
        <img className='bob' src={bob} alt='Bob' />
        <img className='amy' src={amy} alt='Amy' />
    </div>
)

export default Floor4;