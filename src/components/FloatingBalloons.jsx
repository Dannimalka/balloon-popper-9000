import React, { useEffect, useState } from "react";
import SingleBalloon from "./SingleBalloon";

function BalloonContainer(props) {
  const { totalBaloon } = props;
  const [balloons, setBalloons] = useState([]);

  function random(num) {
    return Math.floor(Math.random() * num);
  }

  function getRandomStyles() {
    let mt = random(200);
    var r = random(255);
    var g = random(255);
    var b = random(255);
    let ml = random(20);
    let dur = random(8) + 8;
    let halfChance = random(2);
    //let delay = random(5);
    //let maxTranslateX = 100;
    //let translateX = 0;
    //let isIncreasing = true;
    //let zigZag = `translateX(${translateX}px)`;

    if (halfChance === 0) {
      return {
        backgroundColor: `rgba(${r},${g},${b},0.7)`,
        color: `white`,
        boxShadow: `inset -7px -3px 10px #242424b2`,
        margin: `${mt}px 0 0 ${ml}px`,
        //animation: `float ${dur}s linear  infinite`,

        transition: "all 500ms linear",
      };
    }
  }
  useEffect(() => {
    createBalloons(totalBaloon);
  }, []);

  function createBalloons(num) {
    for (let i = num; i > 0; i--) {
      setBalloons((prevBalloons) => [
        ...prevBalloons,

        <SingleBalloon key={i} style={getRandomStyles()} />,
      ]);
    }
  }

  return <div id="balloon-container">{balloons}</div>;
}

export default BalloonContainer;
