import React, { useState, useEffect } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import gsap from "gsap";

let tl = gsap.timeline();

const Header = ({ history, dimensions, setShowNav, setAdjustHomeAtNav }) => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });

    if (menuState.menuOpened === true) {
      // Run open menu animation

      tl.to("body", { duration: 0.01, css: { overflow: "hidden" } })
        .to(".app", {
          duration: 1,
          y: dimensions.width <= 654 ? "70vh" : dimensions.height / 2,
          ease: "expo.inOut",
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: "50% 0%",
          ease: "expo.inOut",
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to(".hamburger-menu-close", {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: "block",
          },
        });
    } else {
      // Run close menu animation
      tl.to(".app", {
        duration: 1,
        y: 0,
        ease: "expo.inOut",
      })
        .to("#circle", {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to("#Path_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Path_2", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to("#Line_1", {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to(".hamburger-menu span", {
          duration: 0.6,
          delay: -0.7,
          scaleX: 1,
          // transformOrigin: '50% 0%',
          ease: "expo.inOut",
        })
        .to(".hamburger-menu-close", {
          css: {
            display: "none",
          },
        })
        .to("body", {
          css: {
            overflow: "auto",
          },
        });
    }
  }, [menuState.menuOpened]);

  const inClickHandler = () => {
    setMenuState({ menuOpened: true });
    setShowNav("block");
    setTimeout(() => {
      setAdjustHomeAtNav(true);
    }, 500);
  };

  const outClickHandler = () => {
    setMenuState({ menuOpened: false });
    setTimeout(() => {
      setShowNav("none");
    }, 1000);
    setTimeout(() => {
      setAdjustHomeAtNav(false);
    }, 500);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink onClick={() => setAdjustHomeAtNav(false)} to="/">
              Jose Rodriguez.
            </NavLink>
          </div>
          <div className="nav-toggle">
            <div onClick={inClickHandler} className="hamburger-menu">
              <span></span>
              <span></span>
            </div>
            <div onClick={outClickHandler} className="hamburger-menu-close">
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
