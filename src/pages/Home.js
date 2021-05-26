import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Banner from "../components/Banner";
import Cases from "../components/Cases";
import IntroOverlay from "../components/IntroOverlay";
import { headshots } from "../assets/utils/pictures.js";
import { profileImages } from "../assets/utils/pictures.js";

let tl = gsap.timeline();

const Home = ({
  dimensions,
  adjustHomeAtNav,
  setAdjustHomeAtNav,
  setHomeAnimationOnce,
  homeAnimationOnce,
  setShowNav,
  showNav,
}) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [colorIndexCount, setColorIndexCount] = useState(0);
  const [stateHeadshots, setStateHeadshots] = useState(headshots);
  const [stateProfileImages] = useState(profileImages);
  const [phoneHomePictureCount, setPhoneHomePictureCount] = useState(0);

  const homeAnimation = (completeAnimation) => {
    tl.from(".line span", {
      y: 100,
      ease: "power5.out",
      delay: 0.5,
      skewY: 7,
      duration: 1.8,
      stagger: {
        amount: 0.3,
      },
    })
      .to(".overlay-top", {
        duration: 0.6,
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4,
      })
      .to(".overlay-bottom", {
        duration: 1.6,
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to(".intro-overlay", {
        duration: 0,
        css: { display: "none" },
      })
      .from(".case-image img", {
        duration: 1.6,
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: {
          amount: 0.4,
        },
        onComplete: completeAnimation,
      });
  };

  const completeAnimation = () => {
    setAnimationComplete(true);
    setHomeAnimationOnce(true);
  };

  useEffect(() => {
    if (homeAnimationOnce === false) {
      homeAnimation(completeAnimation);
    } else {
      tl.from(".home", {
        duration: 1.6,
        width: 0,
        ease: "expo.inOut",
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
        .to(".intro-overlay", {
          duration: 0,
          css: { display: "none" },
        })
        .from(".case-image img", {
          duration: 1.6,
          scale: 1.4,
          ease: "expo.inOut",
          delay: -2,
          stagger: {
            amount: 0.4,
          },
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <main className="home">
      {!animationComplete && !homeAnimationOnce ? <IntroOverlay /> : null}
      <Banner
        setShowNav={setShowNav}
        dimensions={dimensions}
        adjustHomeAtNav={adjustHomeAtNav}
        setAdjustHomeAtNav={setAdjustHomeAtNav}
      />
      <Cases
        stateProfileImages={stateProfileImages}
        phoneHomePictureCount={phoneHomePictureCount}
        setPhoneHomePictureCount={setPhoneHomePictureCount}
        colorIndexCount={colorIndexCount}
        setColorIndexCount={setColorIndexCount}
        dimensions={dimensions}
        pictures={stateHeadshots}
        setPictures={setStateHeadshots}
      />
    </main>
  );
};

export default Home;
