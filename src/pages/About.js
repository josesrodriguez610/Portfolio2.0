import React from "react";
import { motion } from "framer-motion";
import { TransitionHelper } from "../assets/utils/routerTransition";

const About = ({ showNav }) => {
  const transitions = TransitionHelper(showNav);

  return (
    <motion.div
      exit="out"
      animate="in"
      initial="out"
      variants={transitions.pageVariants}
      transition={transitions.pageTransition}
    >
      <div className="page">
        <div className="container">
          <div className="row">
            <h3>This is the about page</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
