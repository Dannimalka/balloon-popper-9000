import React, { useRef, useState } from "react";

const SingleBalloon = (props) => {
  let [translateX, setTranslateX] = useState(0);
  let [translateY, setTranslateY] = useState(100);
  let [isIncreasing, setIsIncreasing] = useState(true);
  let leftSide = window.innerWidth - window.innerWidth;
  let rightSide = window.innerWidth;
  const balloon = useRef();

  let zigZag = `translateX(${translateX}px) translateY(${translateY}vh)`;

  let maxTranslateX = 400;
  //let translateX = 0;
  //let isIncreasing = true;

  function updateTranslateX(isIncreasing) {
    const positionX = balloon.current?.getBoundingClientRect()?.x;
    /*if (positionX <= rightSide) {
      setTranslateY(20);
      return setTranslateX((prev) => prev + 1);
    }
    setTranslateY(20);
    return setTranslateX((prev) => prev - 1);*/
    //console.log("isIncreased", isIncreasing);

    if (isIncreasing) {
      setTranslateX((prev) => prev + 1);
      if (positionX >= rightSide / 4) {
        setIsIncreasing(false);
      }
    } else {
      setTranslateX((prev) => prev - 1);
      if (positionX <= leftSide) {
        setIsIncreasing(true);
      }
    }
    setTranslateY(20);
  }

  setInterval(() => updateTranslateX(isIncreasing), 1);
  return (
    <>
      <div
        ref={balloon}
        key={props.key}
        className="balloon"
        style={{
          ...props.style,
          transform: zigZag,
        }}
      />
    </>
  );
};

export default SingleBalloon;
