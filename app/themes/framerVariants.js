export const PageTransitionVariant = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -50,
    transition: {
      duration: 0.3,
    },
  },
};

export const DraverMobile = {
  hidden: { opacity: 0, x: 0, x:20 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -50,
    transition: {
      duration: 0.1,
    },
  },
};


export const DraverMobileLayoutFilter = {
  hidden: { opacity: 0, x: 0, y:30 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -50,
    transition: {
      duration: 0.3,
    },
  },
};

export const DraverMobileLayoutSearch = {
  hidden: { opacity: 0, x: 0, x:-200 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -50,
    transition: {
      duration: 0.3,
    },
  },
};
  