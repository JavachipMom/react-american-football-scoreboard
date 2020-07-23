import React, { useState } from "react";
import "./App.css";

const ScoreButtons = () => {
  const [homePoint, changePoint] = useState(0);
  const [awayPoint, changePoint2] = useState(0);
  const [quarter, changeQuarter] = useState(0);

  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          className="homeButtons__touchdown"
          onClick={() => changePoint(homePoint + 7)}
        >
          Home Touchdown
        </button>
        <button
          className="homeButtons__fieldGoal"
          onClick={() => changePoint(homePoint + 3)}
        >
          Home Field Goal
        </button>
      </div>
      <div className="quarterButton">
        <button
          className="quarterButton__next"
          onClick={() => changeQuarter(quarter + 1)}
        >
          Next Quarter
        </button>
      </div>
      <div className="awayButtons">
        <button
          className="awayButtons__touchdown"
          onClick={() => changePoint2(awayPoint + 7)}
        >
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          onClick={() => changePoint2(awayPoint + 3)}
        >
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default ScoreButtons;
