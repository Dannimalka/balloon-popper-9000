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
    // backgroundColor: `rgba(${r},${g},${b},1)`,
    // color: `white`,
    // boxShadow: `inset -7px -3px 10px #242424b2`,
    margin: `${mt}px 0 0 ${ml}px`,
    // animation: `float ${dur}s linear  infinite`,
    // animationDelay: `${ml}s`,
  };
}
function getRandomChildStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);

  return {
    backgroundColor: `rgba(${r},${g},${b},1)`,
    color: `white`,
    boxShadow: `inset -7px -3px 10px #242424b2`,
  };
}

function BalloonContainer(props) {
  const { totalBalloons, clickedCount, setClickedCount, level } = props;
  const [balloons, setBalloons] = useState([]);
  const [animateScore, setAnimateScore] = useState(false);

  useEffect(() => {
    createBalloons(totalBalloons);
  }, [totalBalloons]);

  function getRandomFuckingNumber(startPoint) {
    return startPoint + random(20);
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
      let ml = random(20);
      let speed = random(5) + 5;
      let startPoint = Math.floor(Math.random() * (80 - 5 + 1) + 5);
      let balloonKey = generateKey();
      newBalloons.push(
        <m.div
          key={balloonKey}
          className="outerBalloon"
          style={getRandomStyles()}
          onMouseLeave={(e) => (e.target.style.zIndex = "0")}
          onMouseEnter={(e) => (e.target.style.zIndex = "2")}
          onClick={(e) => {
            console.log("e.target", e.target);
            e.target.className = "invisible";
            //console.log("e", (e.target.children[0].className = "invisible"));
            /*setBalloons((prevBalloons) =>
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
            );*/
            setClickedCount((prevCount) => prevCount + 1);
          }}
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
            y: ["100vh", "-100vh"],
          }}
        >
          <div className="balloon" style={getRandomChildStyles()} />
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
        animate={animateScore ? { scale: [1, 1.5, 1], color: "yellow" } : {}}
        transition={{ duration: 0.5 }}
      >
        Score: {clickedCount}
        {clickedCount === 0 ? "" : 0}
      </m.p>
    </div>
  );
}

export default BalloonContainer;
