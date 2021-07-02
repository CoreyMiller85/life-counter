import React from "react";
import "./Game.css";
import GameButton from "./GameButton";

import PlayerCard from "./PlayerCard";

const Game = (props) => {
  let players = props.players.map((player) => {
    return (
      <PlayerCard key={player.id} decrementHealth ={player.decrementHealth} id={player.id} health={player.health} name={player.name} />
    );
  });
  return (<div>
    {players}
  <GameButton /></div>);
};

export default Game;
