import React from 'react';
import MenuBoxes from "../../shared/Menu/MenuBoxes/MenuBoxes.js";

import './Floor1.css';

let stats = {
    player: { //put character first to match layout in game
      name: "Bob",
      hp: 100,
      weapon: "Sword",
    },
    enemy: { // removed enemy weapon property
      name: "Susan",
      hp: 100,
      weapon: "Whip",
    },
    message: "Ready to attack!", //changed 'message property key to 'console' to match game window
    attack: 15
  };

const Floor1 = () => (
    <div className='floor1-wrapper'>
        <h1>Level 1</h1>
        <h2>V School: 1st Floor</h2>
        <MenuBoxes stats={stats}></MenuBoxes>
    </div>
)

export default Floor1;