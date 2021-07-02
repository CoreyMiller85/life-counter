import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import './GameButton.css'


function GameButton(props) {
  return (
    <div className="game-button">
      <div className="btn">
        <FontAwesomeIcon icon={faCogs} className="cogs"/>
      </div>
    </div>
  )
}

export default GameButton;