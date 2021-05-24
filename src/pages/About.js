import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TransitionHelper } from "../assets/utils/routerTransition";
import { profileImages } from "../assets/utils/pictures";

const About = ({ showNav }) => {
  const transitions = TransitionHelper(showNav);
  const [stateProfileImages, _] = useState(profileImages);
  const [pictureCount, setPictureCount] = useState(0);
  const [changePicture, setChangePicture] = useState(true);

  useEffect(() => {
    let length = stateProfileImages.length;

    if (changePicture) {
      const id = setInterval(() => {
        // count++;
        setPictureCount((prev) => {
          if (prev === length - 1) {
            return (prev = 0);
          } else {
            return (prev += 1);
          }
        });
      }, 2000);
      return () => clearInterval(id);
    }
  }, [pictureCount, changePicture]);

  return (
    <motion.div
      exit="out"
      animate="in"
      initial="out"
      variants={transitions.pageVariants}
      transition={transitions.pageTransition}
    >
      <div className="page">
        <div className="about">
          <div className="about-container">
            <div className="about-story-container">
              <h3>About</h3>
            </div>
            <div
              className="image-container"
              onClick={() => setChangePicture((prev) => !prev)}
            >
              <img
                src={`${stateProfileImages[pictureCount].img}.jpg`}
                alt={stateProfileImages[pictureCount].img}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
