import React, { useState } from "react";
import { motion as m } from "framer-motion";

const Ufo = ({ setShowGame }) => {
  const [startPoint, setStartPoint] = useState(
    Math.floor(Math.random() * (70 - 5 + 1) + 5)
  );
  const [speed, setSpeed] = useState(random(5) + 5);
  const [ml, setMl] = useState(random(2));

  function random(num) {
    return Math.floor(Math.random() * num);
  }
  function getRandomFuckingNumber(startPoint) {
    return startPoint + random(30);
  }

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
    <div className="ufo_container">
      <div
        className="ufo"
        onClick={() => handleBombClick()}
        style={{
          left: `${startPoint}`,
          animationDuration: `${rocketDuration}s`,
          width: `${rocketScale}%`,
          position: "absolute",
          zIndex: "40",
        }}
      >
        <m.img
          style={{ zIndex: "60" }}
          src="/ufo.svg"
          alt=""
          transition={{
            x: {
              ease: "easeIn",
              duration: 5,
              repeat: "infinity",
            },
            y: {
              ease: "easeIn",
              duration: speed,
              repeat: "infinity",
            },
            delay: ml,
          }}
          animate={{
            x: [
              `${startPoint}vw`,
              `${getRandomFuckingNumber(startPoint)}vw`,
              `${getRandomFuckingNumber(startPoint)}vw`,
              `${getRandomFuckingNumber(startPoint)}vw`,
              `${getRandomFuckingNumber(startPoint)}vw`,
              `${startPoint}vw`,
            ],
            y: ["90vh", "10vh", "90vh"],
          }}
        />
      </div>
    </div>
  );
};

export default Ufo;
