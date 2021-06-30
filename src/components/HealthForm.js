import React from "react";
import "./HealthForm.css";

function HealthForm(props) {
  function increaseStartingHealth() {
    const newHealth = props.health + 5;
    props.changeStartingHealth(newHealth);
  }

  function decreaseStartingHealth() {
    const newHealth = props.health - 5;
    props.changeStartingHealth(newHealth);
  }

  return (
    <div className="health-form">
      <div>
        {/* <label htmlFor="health">Starting Health: </label> */}
        <div className="starting-health-counter">
          <h3 className="title">Starting Health</h3>
          <div className="counter">
            <p onClick={decreaseStartingHealth} className="minus">
              -
            </p>
            <h2 className="health-value">{props.health}</h2>
            <p onClick={increaseStartingHealth} className="plus">
              +
            </p>
          </div>
        </div>
      </div>
      {/* <input
        type="number"
        name="health"
        value={props.health}
        onChange={(e) => props.changeStartingHealth(e)}
      /> */}
    </div>
  );
}

export default HealthForm;
