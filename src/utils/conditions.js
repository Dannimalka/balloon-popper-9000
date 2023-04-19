import INITIAL_STATE from "@/lib/initialState";

export const levelIsCompleted = (clickedCount, levelRequirement) => {
  return clickedCount >= levelRequirement;
};

export const showTransitionScreen = (showLevel) => {
  return showLevel;
};

export const transitionCountHandler = (setCount) => {
  setCount(INITIAL_STATE.count);
  return setInterval(() => {
    setCount((count) => count - 1);
  }, 1000);
};
