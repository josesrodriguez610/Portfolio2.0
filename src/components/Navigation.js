import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About me</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact">Get in touch</NavLink>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="/docs/Jose_Rodriguez_Resume.pdf"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:josesrodriguez610@gmail.com"
                  >
                    josesrodriguez610@gmail.com
                  </a>
                </li>
              </ul>

              <ul className="nav-info">
                <li className="nav-info-label">Social Links</li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/josesrodriguez610"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/josesrodriguez610/"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>

              <ul className="nav-info">
                {/* <li className="nav-info-label">Phone</li>
                <li>+41 (0) 75 510 28 70</li> */}
              </ul>

              <ul className="nav-info">
                {/* <li className="nav-info-label">Legal</li>
                <li>Privacy and Cookies</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
