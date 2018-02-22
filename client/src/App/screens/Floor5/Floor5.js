import React from 'react';
import MenuBoxes from "../../shared/Menu/MenuBoxes/MenuBoxes.js";

import './Floor5.css';

let stats = {
    player: { //put character first to match layout in game
      name: "Bob",
      hp: 500,
      weapon: " Majestic He- Man Sword",
    },
    enemy: { // removed enemy weapon property
      name: " Master Splinter ",
      hp: 500,
      weapon: "Bad Breath ",
    },
    message: "Ready to attack!", //changed 'message property key to 'console' to match game window
    attack: 75
  };

const Floor5 = () => (
    <div className='floor5-wrapper'>
        <h1>Level 5</h1>
        <h2>V School: 5th Floor</h2>
        <MenuBoxes stats={stats}></MenuBoxes>
    </div>
)

export default Floor5;