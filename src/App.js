/** @jsxImportSource theme-ui */
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useColorMode } from "theme-ui";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { BsFillSunFill as Sun } from 'react-icons/bs';

import Home from "./components/home";
import ScrollToTop from "./scroll";
import Particles from "react-particles-js";
import Design from "./components/sub/design";
import Resume from "./components/sub/resume";
import TravelPageLanding from "./components/blog/travel/landing";

function App() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <nav>
          <div className="profile">
            <div
              className="circle"
              style={{ backgroundImage: "url(/img/profile-min.jpg)" }}
            ></div>
            <div className="text">
              <h1 sx={{ color: "primary" }}>Ansh Chauhan</h1>
              <p sx={{ color: "text" }}>Front-end Web Developer</p>
              <p sx={{ color: "text" }}>Graphic Designer</p>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/" sx={{ color: "primary" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/blog" sx={{ color: "primary" }}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" sx={{ color: "primary" }}>
                About
              </Link>
            </li>
            <li>
              {colorMode === "light" ? (
                <FontAwesomeIcon
                  className="icon"
                  sx={{ color: "iconInverseColor" }}
                  icon={faMoon}
                  onClick={() =>
                    setColorMode(colorMode === "light" ? "dark" : "light")
                  }
                />
              ) : (
                <Sun
                  className="icon"
                  sx={{ color: "iconInverseColor" }}
                  onClick={() =>
                    setColorMode(colorMode === "light" ? "dark" : "light")
                  }
                />
              )}
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/design" component={Design} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/travel" component={TravelPageLanding} exact />
          <Route path="/:page" component={Home} />
        </Switch>
        <Particles
          sx={{ backgroundColor: "background" }}
          id="particles-js"
          params={{
            particles: {
              line_linked: {
                enable: false,
              },
              size: {
                value: 5,
                random: true,
              },
              color: {
                value: "#ff470a",
              },
              move: {
                speed: 0.5,
              },
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;
