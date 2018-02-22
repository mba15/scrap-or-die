import React from 'react';
import MenuBoxes from "../../shared/Menu/MenuBoxes/MenuBoxes.js";

import './Floor4.css';
let stats = {
    player: { //put character first to match layout in game
      name: "Bob",
      hp: 400,
      weapon: " Two Handed Sword",
    },
    enemy: { // removed enemy weapon property
      name: "",
      hp: 400,
      weapon: " Ninja Star ",
    },
    message: "Ready to attack!", //changed 'message property key to 'console' to match game window
    attack: 60
  };

const Floor4 = () => (
    <div className='floor4-wrapper'>
        <h1>Level 4</h1>
        <h2>V School: 4th Floor</h2>
        <MenuBoxes stats={stats}></MenuBoxes>
    </div>
)

export default Floor4;