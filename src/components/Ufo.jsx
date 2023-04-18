import React, { useState, useRef } from "react";
import { motion as m } from "framer-motion";

const Ufo = ({ setShowGame }) => {
  const [speed, setSpeed] = useState(random(5) + 5);
  const [ml, setMl] = useState(random(2));

  const startPointRef = useRef(Math.floor(Math.random() * (70 - 5 + 1) + 5));

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function getRandomFuckingNumber(startPoint) {
    return startPoint + random(40);
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
      <div className="ufo" onClick={() => handleBombClick()}>
        <m.img
          style={{
            width: `${rocketScale}%`,
            position: "absolute",
            left: `${startPointRef.current}`,
            zIndex: "40",
          }}
          src="/ufo.svg"
          alt=""
          transition={{
            x: {
              ease: "linear",
              duration: speed,
              repeat: "infinity",
            },
            y: {
              ease: "linear",
              duration: speed,
              repeat: "infinity",
            },
            delay: ml,
          }}
          animate={{
            x: [
              `${startPointRef.current}vw`,
              `${getRandomFuckingNumber(startPointRef.current)}vw`,
              `${getRandomFuckingNumber(startPointRef.current)}vw`,
              `${getRandomFuckingNumber(startPointRef.current)}vw`,
              `${getRandomFuckingNumber(startPointRef.current)}vw`,
              `${startPointRef.current}vw`,
            ],
            y: [
              `${startPointRef.current}vh`,
              `${getRandomFuckingNumber(startPointRef.current)}vh`,
              `${getRandomFuckingNumber(startPointRef.current)}vh`,
              `${getRandomFuckingNumber(startPointRef.current)}vh`,
              `${getRandomFuckingNumber(startPointRef.current)}vh`,
              `${getRandomFuckingNumber(startPointRef.current)}vh`,
              `${startPointRef.current}vh`,
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Ufo;
