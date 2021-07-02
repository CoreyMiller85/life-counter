import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";

import StartScreen from "./components/StartScreen";
import Game from "./components/Game";

function App() {
  const [players, setPlayers] = useState([]);
  const [startingHealth, setStartingHealth] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  let history = useHistory();

  const handleAddPlayer = (e, playerName) => {
    e.preventDefault();
    let id;
    if (players.length === 0) {
      id = 1;
    }
    id = players.length + 1;

    setPlayers([
      ...players,
      { id: id, name: playerName, health: startingHealth },
    ]);
  };

  function checkForEndGame() {
    players.forEach(function checkIfHealthIsZero(player) {
      if (player.health <= 0) {
        setGameOver(true)
      }
      return
    })
    return
  }

  function incrementHealth(playerID) {
    const newPlayers = [...players];
    newPlayers.forEach((element, i) => {
      if (element.id === playerID) {
        element.health = element.health + 1;
      }
      return;
    });
    setPlayers(newPlayers);
  }

  function decrementHealth(playerID) {
    const newPlayers = [...players];
    newPlayers.forEach((element, i) => {
      if (element.id === playerID) {
        element.health = element.health - 1;
      }
      return;
    });
    setPlayers(newPlayers);
    checkForEndGame();
  }

  function handleStartGame(event) {
    event.preventDefault();
    if (players.length > 0) {
      const newPlayers = players.map((player) => {
        player.health = startingHealth;
        return player;
      });
      setPlayers(newPlayers);
      history.push("/game");
    }
  }

  function handleChangeStartingHealth(value) {
    setStartingHealth(value);
    setGameOver(false)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <StartScreen
            handleStartGame={handleStartGame}
            addPlayer={handleAddPlayer}
            players={players}
            startGame={handleStartGame}
            startingHealth={startingHealth}
            changeStartingHealth={handleChangeStartingHealth}
          />
        </Route>
        <Route>
          <Game
            players={players}
            incrementHealth={incrementHealth}
            decrementHealth={decrementHealth}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
