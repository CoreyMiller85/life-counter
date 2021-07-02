import React from "react";
import "./Game.css";
import GameButton from "./GameButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import PlayerCard from "./PlayerCard";

const Game = (props) => {
  let players = props.players.map((player, i, list) => {

    if (i === 0) {
      return (
        <React.Fragment>
          <PlayerCard
            key={player.id}
            decrementHealth={props.decrementHealth}
            id={player.id}
            health={player.health}
            incrementHealth={props.incrementHealth}
            name={player.name}
          />
          <GameButton />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <PlayerCard
            key={player.id}
            decrementHealth={props.decrementHealth}
            id={player.id}
            health={player.health}
            incrementHealth={props.incrementHealth}
            name={player.name}
          />
        </React.Fragment>
      );
    }
  });
  return <div>{players}</div>;
};

export default Game;

// <div key={player.id} className="player-card">
//   <div className="player__bar">
//     <div className="icon" onClick={(e) => {props.decrementHealth(player.id)}}>
//       <FontAwesomeIcon icon={faMinusCircle} size="4x" className="minus" />
//     </div>
//     <h3 className="player__health">{player.health}</h3>
//     <div className="icon" onClick={(e) => {props.incrementHealth(player.id)}}>
//       <FontAwesomeIcon icon={faPlusCircle} size="4x"  className="plus"/>
//     </div>
//   </div>
//   <h3>{player.name}</h3>
// </div>
