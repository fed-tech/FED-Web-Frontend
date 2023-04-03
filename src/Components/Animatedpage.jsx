import React from "react";
import { motion } from "framer-motion";
const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export const Animatedpage = ({ children }) => {
  const pageTransition = {
    duration: 0.4,
    ease: "easeInOut",
  };

  return (
    <motion.div
      //initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
      // variants={animations}
      // // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.4, ease: [0.61, 1, 0.88, 1] }}

      // initial={{ opacity: 0, scale: 0.5 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
