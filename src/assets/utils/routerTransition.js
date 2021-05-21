export const TransitionHelper = (param) => {
  const pageVariants = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 1,
      y: param === "none" ? "100%" : "0%",
    },
  };

  const pageTransition = {
    // type: "tween",
    // stiffness: 3,
    duration: 0.7,
  };

  return { pageVariants, pageTransition };
};
