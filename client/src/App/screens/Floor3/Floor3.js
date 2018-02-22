import React from 'react';
import MenuBoxes from "../../shared/Menu/MenuBoxes/MenuBoxes.js";

import './Floor3.css';

let stats = {
    player: { //put character first to match layout in game
      name: "Bob",
      hp: 300,
      weapon: " Long Sword",
    },
    enemy: { // removed enemy weapon property
      name: " Major Pain ",
      hp: 300,
      weapon: " Hostile Exercise ",
    },
    message: "Ready to attack!", //changed 'message property key to 'console' to match game window
    attack: 45
  };

const Floor3 = () => (
    <div className='floor3-wrapper'>
        <h1>Level 3</h1>
        <h2>V School: 3rd Floor</h2>
        <MenuBoxes stats={stats}></MenuBoxes>
    </div>
)

export default Floor3;