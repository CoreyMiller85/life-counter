import React from "react";

function PlayerCard(props) {
  return (
    <div
      style={{
        width: "60%",
        padding: "1rem",
        backgroundColor: "green",
        margin: "0px auto",
        border: "2px solid black",
        marginBottom: "1rem",
        textAlign: "center",
      }}
    >
      <h3>{props.playerName}</h3>
    </div>
  );
}

export default PlayerCard;
