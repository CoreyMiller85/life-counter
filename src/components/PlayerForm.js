import React, {useState} from 'react'

function PlayerForm(props) {
  

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (nameValue) {
  //     props.addPlayer(e, nameValue);
  //     setNameValue("")
  //   }
  //   return
  // }

  return (
    <div className="player-name-form">
        <label htmlFor="name">Player Name: </label>
        <input  autoComplete="off" type="text" name="name" onChange={(e) => props.updateName(e)} value={props.nameValue} />
    </div>
  )
}

export default PlayerForm
