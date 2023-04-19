// Import necessary components and modules

import BalloonContainer from "@components/FloatingBalloons";
import Bombs from "@/components/Bombs";
import { useEffect, useState } from "react";
import { framerAnimBackground, framerAnimText } from "@/lib/inlineStyles";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { motion as m } from "framer-motion";
import INITIAL_STATE from "@/lib/initialState";
import {
  levelIsCompleted,
  showTransitionScreen,
  transitionCountHandler,
} from "@/utils/conditions";
import { backgroundStyles } from "@/lib/inlineStyles";
import { addObstacles } from "@/utils/helper";

// Define the Gamepage component

export default function Gamepage() {
  const [totalBalloons, setTotalBalloons] = useState(
    INITIAL_STATE.totalBalloons
  );
  const [clickedCount, setClickedCount] = useState(INITIAL_STATE.clickedCount);
  const [showLevel, setShowLevel] = useState(INITIAL_STATE.showLevel);
  const [showGame, setShowGame] = useState(INITIAL_STATE.showGame);
  const [level, setLevel] = useState(INITIAL_STATE.level);
  const [count, setCount] = useState(INITIAL_STATE.count);
  const [levelRequirement, setLevelRequirement] = useState(
    INITIAL_STATE.levelRequirement
  );
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentWindowSize, setcurrentWindowSize] = useState(null);

  // define function to reset the game state

  const resetGame = () => {
    setTotalBalloons(INITIAL_STATE.totalBalloons);
    setClickedCount(INITIAL_STATE.clickedCount);
    setShowLevel(INITIAL_STATE.showLevel);
    setShowGame(INITIAL_STATE.showGame);
    setLevel(INITIAL_STATE.level);
    setCount(INITIAL_STATE.count);
    setLevelRequirement(INITIAL_STATE.levelRequirement);
  };

  // define function to toggle fullscreen mode

  const handleToggleFullScreen = (event) => {
    if (!isFullScreen) {
      event.view.document.body.requestFullscreen();
    } else {
      event.view.document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  // define function to handle keydown events for fullscreen mode

  const handleKeyDown = (event) => {
    if (event.key === "F11") {
      event.preventDefault();
      handleToggleFullScreen(event);
    }
  };

  // define function to handle exiting fullscreen mode

  const handleFullScreenExit = (currentWindowSize) => {
    if (currentWindowSize >= window.innerHeight)
      setIsFullScreen(false), setcurrentWindowSize(window.innerHeight);
  };

  // define function to attach event listeners for fullscreen mode

  const attachListeners = (currentWindowSize) => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleFullScreenExit(currentWindowSize));
  };

  // define function to remove event listeners for fullscreen mode

  const deleteListeners = (currentWindowSize) => {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener(
      "resize",
      handleFullScreenExit(currentWindowSize)
    );
  };

  // Define the function to start the next level

  const startNextLevel = () => {
    setShowLevel(true);
    setTimeout(() => {
      setLevel((prevLevel) => prevLevel + 1);
    }, 1000);
    setTotalBalloons((prevTotal) => prevTotal + level);
    setLevelRequirement((prevTotal) => prevTotal + 15);
    setTimeout(() => {
      setShowLevel(false);
    }, 5000);
  };

  useEffect(() => {
    setcurrentWindowSize(window.innerHeight);
    attachListeners(currentWindowSize);
    return () => {
      deleteListeners(currentWindowSize);
    };
  }, [currentWindowSize]);

  useEffect(() => {
    if (levelIsCompleted(clickedCount, levelRequirement)) {
      startNextLevel();
    }
  }, [clickedCount, level, showLevel, levelRequirement]);

  useEffect(() => {
    let intervalId;
    if (showTransitionScreen(showLevel)) {
      intervalId = transitionCountHandler(setCount);
    }
    return () => clearInterval(intervalId);
  }, [showLevel]);

  return (
    <main style={backgroundStyles(level)}>
      {addObstacles(level, setShowGame)}
      <Bombs setShowGame={setShowGame} />

      <BalloonContainer
        setTotalBalloons={setTotalBalloons}
        totalBalloons={totalBalloons}
        clickedCount={clickedCount}
        setClickedCount={setClickedCount}
        level={level}
      />
      {showLevel && (
        <m.div {...framerAnimBackground} className="Level_container">
          <m.h1 className="text" {...framerAnimText}>
            Level {level}
          </m.h1>
          <m.h2 className="counter" {...framerAnimText}>
            {count}
          </m.h2>
        </m.div>
      )}
      <div
        className="Level_container"
        style={{ display: showGame ? "block" : "none" }}
      >
        <h1 className="text game_over">Game Over</h1>
        <p className="score">Your Score: {clickedCount}0</p>
        <p className="counter new_game" onClick={resetGame}>
          New Game
        </p>
      </div>
      <div onClick={handleToggleFullScreen} className="fullscreen">
        {isFullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
      </div>
    </main>
  );
}
