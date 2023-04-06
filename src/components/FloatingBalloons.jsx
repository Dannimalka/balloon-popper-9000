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
  let halfChance = 1;
  let delay = random(4);

  return {
    backgroundColor: `rgba(${r},${g},${b},1)`,
    color: `white`,
    boxShadow: `inset -7px -3px 10px #242424b2`,
    margin: `${mt}px 0 0 ${ml}px`,
    animation: `float ${dur}s linear  infinite`,
  };
}

function BalloonContainer(props) {
  const { totalBaloon = 10 } = props;
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    createBalloons(totalBaloon);
  }, []);

  function getRandomFuckingNumber() {
    return random(250);
  }

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
            onClick={() =>
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
              )
            }
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

  return <div id="balloon-container">{balloons}</div>;
}

export default BalloonContainer;