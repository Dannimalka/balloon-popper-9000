import Bombs from "@/components/Bombs";
import Rocket from "@/components/Rocket";
import Ufo from "@/components/Ufo";

export const addObstacles = (level, setShowGame) => {
  const rockets = {
    2: <Rocket setShowGame={setShowGame} />,
    3: (
      <>
        <Rocket setShowGame={setShowGame} />
        <Rocket setShowGame={setShowGame} />
      </>
    ),
    4: (
      <>
        <Rocket setShowGame={setShowGame} />
        <Rocket setShowGame={setShowGame} />
        <Rocket setShowGame={setShowGame} />
        <Bombs setShowGame={setShowGame} />
      </>
    ),
  };

  const ufo = {
    5: <Ufo setShowGame={setShowGame} />,
    6: (
      <>
        <Ufo setShowGame={setShowGame} />
        <Ufo setShowGame={setShowGame} />
      </>
    ),
  };
  return level > 4 ? (
    <>
      {rockets[4]}
      {ufo[level > 5 ? 6 : 5]}
    </>
  ) : (
    rockets[level]
  );
};
