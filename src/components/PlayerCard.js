import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import './PlayerCard.css'

function PlayerCard(props) {
  return (
    <div className="player-card">
      <div className="player__bar">
        <div
          className="icon"
          onClick={(e) => {
            props.decrementHealth(props.id);
          }}
        >
          <FontAwesomeIcon icon={faMinusCircle} size="4x" className="minus" />
        </div>
        <h3 className="player__health">{props.health}</h3>
        <div
          className="icon"
          onClick={(e) => {
            props.incrementHealth(props.id);
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} size="4x" className="plus" />
        </div>
      </div>
      <h3>{props.name}</h3>
    </div>
  );
}

export default PlayerCard;
