import React, { useState } from "react";
import HealthForm from "./HealthForm";
import PlayerForm from "./PlayerForm";
import PlayerCard from "./PlayerCard";
import GameButton from "./GameButton";
import "./StartScreen.css";

const StartScreen = (props) => {
  const [health, setHealth] = useState(20);
  const [nameValue, setNameValue] = useState("");

  function updateName(e) {
    setNameValue(e.target.value);
  }

  function submitName(e, name) {
    e.preventDefault();
    props.addPlayer(e, name);
    setNameValue("");
  }

  function changeHealth(e) {
    setHealth(e.target.value);
  }

  function initGame(e, health) {
    props.startGame(e, health);
  }

  const playersList = props.players.map((player, i) => {
    return <PlayerCard key={i} id={player.id} playerName={player.name} />;
  });

  return (
    <div className="start-screen">
      <h1 className="title">Life Counter</h1>
      <form>
        <HealthForm
          health={props.startingHealth}
          changeStartingHealth={props.changeStartingHealth}
        />

        <PlayerForm
          addPlayer={props.addPlayer}
          updateName={updateName}
          nameValue={nameValue}
        />

        <div className="start__players-container">{playersList}</div>

        <button
          className="add-player-btn"
          onClick={(e) => submitName(e, nameValue)}
        >
          Add Player
        </button>
      </form>
      <div
        className="start-button"
        onClick={(e) => {
          initGame(e, health);
        }}
      >
        Start Game
      </div>
    </div>
  );
};

export default StartScreen;
