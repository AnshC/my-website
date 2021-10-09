/** @jsxImportSource theme-ui */
import { Link, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HomePage from './homepage'
import WebDevelopment from "./webdev";
import Design from "./design";
import Photography from './photography'

export default function Home() {
  const { page } = useParams();

  return (
    <div className="home main">
      <section>
        <div className="sidebar">
          <ul className="links">
            <li>
              <Link className="link" sx={{ color: "text" }} to="/web">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/design" className="link" sx={{ color: "text" }}>
                Graphic Design
              </Link>
            </li>
            <li>
              <Link className="link" sx={{ color: "text" }} to="/photography">
                Photography
              </Link>
            </li>
            <li>
              <Link
                className="link"
                sx={{ color: "text" }}
                id="special"
                to="/resume"
              >
                Resume
              </Link>
            </li>
          </ul>
          <p sx={{ color: "text" }}>Updated 9th October 2021</p>
          <ul className="social-links">
            <a target="_blank" rel="noreferrer" href="https://instagram.com/ansh.c05"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/AnshC"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/anshc05"><FontAwesomeIcon className="icon" icon={faDribbble} /></a>
            <a target="_blank" rel="noreferrer" href="mailto:anshc2005@gmail.com"><FontAwesomeIcon className="icon" icon={faEnvelope} /></a>
          </ul>
        </div>
        <div className="render-box">
          {page === undefined ? (
            <HomePage />
          ) : page === "web" ? (
            <WebDevelopment />
          ) : page === "photography" ? (
            <Photography />
          ) : page === "design" ? (
            <Design />
          ) : (
            <HomePage />
          )}
        </div>
      </section>
    </div>
  );
}
