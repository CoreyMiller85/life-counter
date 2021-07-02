import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import './GameButton.css'


function GameButton(props) {
  const [clicked, setClicked] =useState(false)

  function handleGameButtonClick(e) {
    setClicked(!clicked)
  }

  return (
    <div className={clicked ? "game-button clicked" : "game-button"}>
      <div className='btn' onClick={(e) => handleGameButtonClick(e)}>
        <FontAwesomeIcon icon={faCogs} className="cogs"/>
      </div>
    </div>
  )
}

export default GameButton;