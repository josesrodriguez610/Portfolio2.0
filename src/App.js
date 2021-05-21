import React, { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import { AnimatePresence } from "framer-motion";

//Component
import Navigation from "./components/Navigation";
import Header from "./components/Header";

//pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";

//routes
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/services", name: "Services", Component: Services },
  { path: "/about", name: "About", Component: About },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const location = useLocation();

  const [showNav, setShowNav] = useState("none");
  const [adjustHomeAtNav, setAdjustHomeAtNav] = useState(false);
  const [homeAnimationOnce, setHomeAnimationOnce] = useState(false);

  gsap.to("body", { css: { visibility: "visible" }, duration: 0 });

  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const debounceHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debounceHandleResize);

    return () => {
      window.removeEventListener("resize", debounceHandleResize);
    };
  }, [dimensions.height]);

  return (
    <>
      <Header
        dimensions={dimensions}
        setShowNav={setShowNav}
        setAdjustHomeAtNav={setAdjustHomeAtNav}
      />
      <div className="app">
        {routes.map(({ path, Component }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route key={path} exact path={path}>
                <Component
                  dimensions={dimensions}
                  adjustHomeAtNav={adjustHomeAtNav}
                  setAdjustHomeAtNav={setAdjustHomeAtNav}
                  homeAnimationOnce={homeAnimationOnce}
                  setHomeAnimationOnce={setHomeAnimationOnce}
                  setShowNav={setShowNav}
                  showNav={showNav}
                />
              </Route>
            </Switch>
          </AnimatePresence>
        ))}
      </div>
      <section style={{ display: `${showNav}` }}>
        <Navigation setShowNav={setShowNav} />
      </section>
    </>
  );
}

export default App;
