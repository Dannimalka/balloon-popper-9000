import React, { useState } from "react";

const Rocket = ({ setShowGame }) => {
  const [rocketPlace, setRocketPlace] = useState(
    Math.floor(Math.random() * 60) + 20
  );
  const [rocketDuration, setRocketDuration] = useState(
    Math.floor(Math.random() * 8) + 2
  );
  const [rocketScale, setRocketScale] = useState(
    Math.floor(Math.random() * 10) + 10
  );
  const handleBombClick = () => {
    setShowGame(true);
  };

  return (
    <div className="rocket_container">
      <div
        className="rocket"
        onClick={() => handleBombClick()}
        style={{
          left: `${rocketPlace}%`,
          animationDuration: `${rocketDuration}s`,
          width: `${rocketScale}%`,
        }}
      >
        <img src="/rocket.svg" alt="" />
      </div>
    </div>
  );
};

export default Rocket;
