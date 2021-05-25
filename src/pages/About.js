import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TransitionHelper } from "../assets/utils/routerTransition";
import { profileImages } from "../assets/utils/pictures";

const About = ({
  showNav,
  pictureCountInAboutPage,
  setPictureCountInAboutPage,
}) => {
  const transitions = TransitionHelper(showNav);
  const [stateProfileImages, _] = useState(profileImages);
  const [changePicture, setChangePicture] = useState(true);

  useEffect(() => {
    let length = stateProfileImages.length;

    if (changePicture) {
      const id = setInterval(() => {
        setPictureCountInAboutPage((prev) => {
          if (prev === length - 1) {
            return (prev = 0);
          } else {
            return (prev += 1);
          }
        });
      }, 2000);
      return () => clearInterval(id);
    }
  }, [pictureCountInAboutPage, changePicture]);

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
              <h3>
                My name is Jose Rodriguez and I was born in Peru. I love the
                process of finding solutions and software development has
                allowed me to explore finding solutions to complex problems. I
                enjoy creating applications because it pushes me into learning
                new technologies and it gives me the experience of working with
                interesting people that share my same aspirations. I am a
                musician as well as a software developer and my motivation in
                coding comes from the pursuit of creating by bringing new ideas
                to fruition, from discussing factors leading to the development,
                to the implementation and execution of the application.
              </h3>
            </div>
            <div
              className="image-container"
              onClick={() => setChangePicture((prev) => !prev)}
            >
              <img
                src={`${stateProfileImages[pictureCountInAboutPage].img}.jpg`}
                alt={stateProfileImages[pictureCountInAboutPage].img}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
