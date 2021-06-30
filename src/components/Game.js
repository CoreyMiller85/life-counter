import React from "react";
import "./Game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";

const Game = (props) => {
  let players = props.players.map((player) => {
    return (
      <div key={player.id} className="player-card">
        <div className="player__bar">
          <div className="icon" onClick={(e) => {props.decrementHealth(player.id)}}>
            <FontAwesomeIcon icon={faMinusCircle} size="4x" className="minus" />
          </div>
          <h3 className="player__health">{player.health}</h3>
          <div className="icon" onClick={(e) => {props.incrementHealth(player.id)}}>
            <FontAwesomeIcon icon={faPlusCircle} size="4x"  className="plus"/>
          </div>
        </div>
        <h3>{player.name}</h3>
      </div>
    );
  });
  return <div>{players}</div>;
};

export default Game;
