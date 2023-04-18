import React, { useState } from "react";
import Bomb from "./Bomb";

const Bombs = ({ setShowGame }) => {
  const numBombs = Math.floor(Math.random() * 10) + 1; // generate random number between 1 and 10
  const bombsArray = Array.from({ length: numBombs }, (_, i) => i); // create an array of length numBombs
  const [exploded, setExploded] = useState(false);

  const handleBombClick = () => {
    setExploded(true);
    setTimeout(() => {
      setExploded(false);
      setShowGame(true);
    }, 2000);
  };

  return (
    <>
      <div onClick={() => handleBombClick()}>
        {exploded ? (
          <img className="explosion" src="/explosion.svg" alt="" />
        ) : (
          <>
            <div
              className="bomb1"
              style={{
                position: "absolute",
                left: `10%`,
              }}
            >
              {exploded ? (
                <img
                  src="/explosion.svg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              ) : (
                <Bomb />
              )}
            </div>
            <div
              className="bomb2"
              style={{
                position: "absolute",
                left: `19%`,
              }}
            >
              <Bomb />
            </div>
            <div
              className="bomb3"
              style={{
                position: "absolute",
                left: `37%`,
              }}
            >
              <Bomb />
            </div>
            <div
              className="bomb4"
              style={{
                position: "absolute",
                left: `80%`,
              }}
            >
              <Bomb />
            </div>
            <div
              className="bomb5"
              style={{
                position: "absolute",
                left: `64%`,
              }}
            >
              <Bomb />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Bombs;
