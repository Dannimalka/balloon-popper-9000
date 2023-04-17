import React from "react";

const Rocket = ({ setShowGame }) => {
  const handleBombClick = () => {
    setShowGame(true);
  };

  return (
    <div className="rocket_container">
      <div className="rocket" onClick={() => handleBombClick()}>
        <img src="/rocket.svg" alt="" />
      </div>
    </div>
  );
};

export default Rocket;
