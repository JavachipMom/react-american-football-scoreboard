//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";


const Timer = () => {
  const [time, setTime] = useState(3600);
  const seconds = (time % 60).toString().padStart(2, '0');
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  useEffect(() => {
    setInterval(() => {
      setTime((newTime) => {
        return newTime - 1;
      });
    }, 1000);
  }, []);
  return (
    <div className="timer">{hours}:{minutes}:{seconds}</div>
  );
}

const App = () => {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
    const [homePoint, changePoint] = useState(0);
    const [awayPoint, changePoint2] = useState(0);
    const [quarter, changeQuarter] = useState(1);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Chiefs</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score"> { homePoint } </div>
          </div>
          {/* Where we put our timer for the component */}
          <Timer />
          <div className="away">
            <h2 className="away__name">49ers</h2>
            <div className="away__score"> { awayPoint } </div>
          </div>
        </div>
        <BottomRow quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={ event => changePoint(homePoint + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={ event => changePoint(homePoint + 3)}>Home Field Goal</button>
        </div>
        <div className="quarterButton">
          <button className="quarterButton__next" onClick={ event => changeQuarter(quarter + 1 )}>Next Quarter</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={ event => changePoint2(awayPoint + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={ event => changePoint2(awayPoint + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
