import Head from "next/head";
import BalloonContainer from "@components/FloatingBalloons";
import Bombs from "@/components/Bombs";
import { useEffect, useState } from "react";
import Rocket from "@/components/Rocket";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

const INITIAL_STATE = {
  totalBalloons: 10,
  clickedCount: 0,
  showLevel: false,
  showGame: false,
  level: 1,
  count: 5,
};

export default function Home() {
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
    const levelRequirement = 5 * Math.pow(2, level - 1);
    if (clickedCount >= levelRequirement) {
      setShowLevel(true);
      setLevel((prevLevel) => prevLevel + 1);
      setTimeout(() => {
        setTotalBalloons((prevTotal) => prevTotal * 2);
      }, 4000);

      setTimeout(() => {
        setShowLevel(false);
      }, 5000);
    }
  }, [clickedCount, level, showLevel]);

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
  };

  return (
    <>
      <Head>
        <title>Balloon Popper 9000</title>
        <meta
          name="pop fucking balloons nothing else"
          content="Generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
          </div>
        )}

        <Bombs setShowGame={setShowGame} />

        <BalloonContainer
          setTotalBalloons={setTotalBalloons}
          totalBalloons={totalBalloons}
          clickedCount={clickedCount}
          setClickedCount={setClickedCount}
          level={level}
        />
        <div
          className="Level_container"
          style={{ display: showLevel ? "block" : "none" }}
        >
          <h1 className="text">Level {level}</h1>
          <h2 className="counter">{count}</h2>
        </div>
        <div
          className="Level_container"
          style={{ display: showGame ? "block" : "none" }}
        >
          <h1 className="text">Game Over</h1>
          <p className="score">Your Score: {clickedCount}</p>
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
