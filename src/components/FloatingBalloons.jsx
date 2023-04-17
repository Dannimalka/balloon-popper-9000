import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  let mt = random(200);
  let ml = random(20);
  let dur = random(8) + 8;

  return {
    backgroundColor: `rgba(${r},${g},${b},1)`,
    color: `white`,
    boxShadow: `inset -7px -3px 10px #242424b2`,
    margin: `${mt}px 0 0 ${ml}px`,
    animation: `float ${dur}s linear  infinite`,
  };
}

function BalloonContainer(props) {
  const { totalBalloons = 10, clickedCount, setClickedCount, level } = props;
  const [balloons, setBalloons] = useState([]);
  const [animateScore, setAnimateScore] = useState(false);

  useEffect(() => {
    createBalloons(totalBalloons);
  }, [totalBalloons]);

  function getRandomFuckingNumber() {
    return random(250);
  }
  useEffect(() => {
    setAnimateScore(true);
    const timeoutId = setTimeout(() => {
      setAnimateScore(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [clickedCount]);

  function createBalloons(num) {
    let newBalloons = [];
    for (let i = 0; i < num; i++) {
      let balloonKey = generateKey();
      newBalloons.push(
        <m.div
          key={balloonKey}
          transition={{
            x: {
              ease: "easeIn",
              duration: 8,
              repeat: "infinity",
            },
          }}
          animate={{
            x: [
              `0px`,
              `${getRandomFuckingNumber()}px`,
              `${getRandomFuckingNumber()}px`,
              `${getRandomFuckingNumber()}px`,
              `${getRandomFuckingNumber()}px`,
              `0px`,
            ],
          }}
        >
          <div
            className="balloon"
            style={getRandomStyles()}
            onClick={() => {
              setBalloons((prevBalloons) =>
                prevBalloons.map((balloon) => {
                  if (balloon.key === balloonKey) {
                    return (
                      <div
                        key={balloon.key}
                        className="balloon"
                        style={{ ...balloon.props.style, visibility: "hidden" }}
                      />
                    );
                  } else {
                    return balloon;
                  }
                })
              );
              setClickedCount((prevCount) => prevCount + 1);
            }}
          />
        </m.div>
      );
    }
    setBalloons(newBalloons);
  }

  function generateKey() {
    let key = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      key += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return key;
  }

  return (
    <div>
      <div id="balloon-container">{balloons}</div>
      <m.p
        className="score_text"
        animate={animateScore ? { scale: [1, 1.5, 1] } : {}}
        transition={{ duration: 0.5 }}
      >
        Score: {clickedCount}
      </m.p>
    </div>
  );
}

export default BalloonContainer;
