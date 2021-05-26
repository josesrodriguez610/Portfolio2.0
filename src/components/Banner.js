import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

const Banner = ({ dimensions, adjustHomeAtNav, setShowNav }) => {
  const [adjustHome, setAdjustHome] = useState("center");

  useEffect(() => {
    if (adjustHomeAtNav === true && dimensions.width <= "425") {
      setAdjustHome("");
    } else if (adjustHomeAtNav === false && dimensions.width <= "425") {
      setAdjustHome("center");
    }
  }, [dimensions.width, adjustHomeAtNav]);

  return (
    <section className="main">
      <div className="container">
        <div className="row" style={{ justifyContent: adjustHome }}>
          <h2>
            <div className="line">
              <span>My Portfolio</span>
            </div>
            <div className="line">
              <span>Software Developer</span>
            </div>
          </h2>
          <div className="btn-row">
            <NavLink onClick={() => setShowNav("none")} to="/about">
              More about me <RightArrow />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
