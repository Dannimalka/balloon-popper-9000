import BalloonContainer from "@components/FloatingBalloons";
import Bombs from "@/components/Bombs";
import { useEffect, useState } from "react";
import Rocket from "@/components/Rocket";
import Ufo from "@/components/Ufo";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { motion as m } from "framer-motion";

const INITIAL_STATE = {
  totalBalloons: 22,
  clickedCount: 0,
  showLevel: false,
  showGame: false,
  level: 1,
  count: 5,
  levelRequirement: 1,
};

export default function Gamepage() {
  const [totalBalloons, setTotalBalloons] = useState(
    INITIAL_STATE.totalBalloons
  );
  const [clickedCount, setClickedCount] = useState(INITIAL_STATE.clickedCount);
  const [showLevel, setShowLevel] = useState(INITIAL_STATE.showLevel);
  const [showGame, setShowGame] = useState(INITIAL_STATE.showGame);
  const [level, setLevel] = useState(INITIAL_STATE.level);
  const [count, setCount] = useState(INITIAL_STATE.count);
  const [currentWindowSize, setcurrentWindowSize] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [levelRequirement, setLevelRequirement] = useState(
    INITIAL_STATE.levelRequirement
  );

  const handleToggleFullScreen = (event) => {
    if (!isFullScreen) {
      event.view.document.body.requestFullscreen();
    } else {
      event.view.document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };
  useEffect(() => {
    setcurrentWindowSize(window.innerHeight);

    const handleKeyDown = (event) => {
      if (event.key === "F11") {
        event.preventDefault();
        handleToggleFullScreen(event);
      }
    };

    const handleFullScreenExit = () => {
      if (currentWindowSize >= window.innerHeight)
        setIsFullScreen(false), setcurrentWindowSize(window.innerHeight);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleFullScreenExit);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleFullScreenExit);
    };
  }, [currentWindowSize]);

  useEffect(() => {
    if (clickedCount >= levelRequirement) {
      setShowLevel(true);
      setLevel((prevLevel) => prevLevel + 1);

      setTotalBalloons((prevTotal) => prevTotal + level);

      setLevelRequirement((prevTotal) => prevTotal + 2);

      setTimeout(() => {
        setShowLevel(false);
      }, 5000);
    }
  }, [clickedCount, level, showLevel, levelRequirement]);

  useEffect(() => {
    let intervalId;

    if (showLevel) {
      setCount(INITIAL_STATE.count);
      intervalId = setInterval(() => {
        setCount((count) => count - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showLevel]);

  const resetGame = () => {
    setTotalBalloons(INITIAL_STATE.totalBalloons);
    setClickedCount(INITIAL_STATE.clickedCount);
    setShowLevel(INITIAL_STATE.showLevel);
    setShowGame(INITIAL_STATE.showGame);
    setLevel(INITIAL_STATE.level);
    setCount(INITIAL_STATE.count);
    setLevelRequirement(INITIAL_STATE.levelRequirement);
  };

  return (
    <>
      <main
        style={{
          background:
            level === 1
              ? `url("/land2.svg") center center no-repeat fixed`
              : level === 2
              ? `url("/sky2.svg")`
              : level === 3 || level === 4
              ? `url("/stars2.svg") `
              : `url("/space2.svg")`,

          backgroundSize:
            level === 1
              ? `100%`
              : level === 2
              ? ``
              : level === 3 || level === 4
              ? `100%`
              : `cover`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {level === 2 && <Rocket setShowGame={setShowGame} />}
        {level === 3 && (
          <div>
            <Rocket setShowGame={setShowGame} />
            <Rocket setShowGame={setShowGame} />
          </div>
        )}
        {level > 3 && (
          <div>
            <Rocket setShowGame={setShowGame} />
            <Rocket setShowGame={setShowGame} />
            <Rocket setShowGame={setShowGame} />
            <Bombs setShowGame={setShowGame} />
          </div>
        )}
        {level > 4 && <Ufo setShowGame={setShowGame} />}
        {level > 6 && <Ufo setShowGame={setShowGame} />}
        <Bombs setShowGame={setShowGame} />

        <BalloonContainer
          setTotalBalloons={setTotalBalloons}
          totalBalloons={totalBalloons}
          clickedCount={clickedCount}
          setClickedCount={setClickedCount}
          level={level}
        />
        {showLevel && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 1, 1, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 6 }}
            className="Level_container"
            style={{
              /*display: showLevel ? "block" : "none"*/ zIndex: "5000",
            }}
          >
            <h1 className="text">Level {level}</h1>
            <h2 className="counter">{count}</h2>
          </m.div>
        )}
        <div
          className="Level_container"
          style={{ display: showGame ? "block" : "none" }}
        >
          <h1 className="text">Game Over</h1>
          <p className="score">Your Score: {clickedCount}0</p>
          <p className="counter new_game" onClick={resetGame}>
            New Game
          </p>
        </div>
        <div onClick={handleToggleFullScreen} className="fullscreen">
          {isFullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
        </div>
      </main>
    </>
  );
}
