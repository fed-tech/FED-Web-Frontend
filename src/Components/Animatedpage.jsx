import React from "react";
import { motion } from "framer-motion";
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export const Animatedpage = ({ children }) => {
  // const variants = {
  //   hidden: { opacity: 0, x: -200, y: 0 },
  //   enter: { opacity: 1, x: 0, y: 0 },
  //   exit: { opacity: 0, x: 0, y: -100 },
  // };
  return (
    <motion.div
      variants={animations}
      // initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.5 }}

      // variants={variants} // Pass the variant object into Framer Motion
      // initial="hidden" // Set the initial state to variants.hidden
      // animate="enter" // Animated state to variants.enter
      // exit="exit" // Exit state (used later) to variants.exit
      // transition={{ type: "linear" }} // Set the transition to linear
    >
      {children}
    </motion.div>
  );
};
