import React from 'react';

import MenuBoxes from "../../shared/Menu/MenuBoxes/MenuBoxes.js";
import './Floor2.css';

let stats = {
    player: { //put character first to match layout in game
      name: " Bob",
      hp: 200,
      weapon: " Double Edged Sword",
    },
    enemy: { // removed enemy weapon property
      name: " Sam",
      hp: 200,
      weapon: " Hatchet ",
    },
    message: "Ready to attack!", //changed 'message property key to 'console' to match game window
    attack: 30
  };

const Floor2 = () => (
    <div className='floor2-wrapper'>
        <h1>Level 2</h1>
        <h2>V School: 2nd Floor</h2>
        <MenuBoxes stats={stats}></MenuBoxes>
    </div>
)

export default Floor2;