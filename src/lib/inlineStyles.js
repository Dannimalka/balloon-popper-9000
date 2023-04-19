export const backgroundStyles = (level) => {
  return {
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
  };
};

export const framerAnimBackground = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 1, 1, 1, 1, 1, 0] },
  exit: { opacity: 0 },
  transition: { duration: 6 },

  style: {
    zIndex: "5000",
  },
};
export const framerAnimText = {
  initial: { opacity: 0 },
  animate: { opacity: [0, 0, 0, 1] },
  transition: { duration: 1.5 },
};

/*
export const FramerLevelAnim = () => {
  initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 1, 1, 1, 0] }}
          exit={{ opacity: 0 }}
}

*/
