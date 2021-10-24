/** @jsxImportSource theme-ui */
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLocationSharp, IoAirplaneSharp, IoCodeSlash } from 'react-icons/io5';

export default function HomePage() {
  useEffect(()=>{
    const wrapper = document.querySelectorAll('.wrapper');
    const bgicon = document.querySelectorAll('.bg-icon');
      wrapper[0].addEventListener('mouseover', ()=>{
        rotateIcon(0)
      })
      wrapper[3].addEventListener('mouseover', ()=>{
        rotateIcon(1)
      })
      wrapper[0].addEventListener('mouseout', ()=>{
        rotateIconOpposite(0)
      })
      wrapper[3].addEventListener('mouseout', ()=>{
        rotateIconOpposite(1)
      })
    function rotateIcon(iconIndex) {
      bgicon[iconIndex].style.transform = "rotate(-15deg) translateX(-15px) scale(1.5)"
    }
    function rotateIconOpposite(iconIndex) {
      bgicon[iconIndex].style.transform = "rotate(0deg) translateX(-15px) scale(1)"
    }
  })
  return (
    <div className="homepage">
      <div className="row">
        <Link
          className="wrapper React-Link box"
          sx={{ backgroundColor: "box" }}
          to="/web"
        >
          <IoCodeSlash className="bg-icon" sx={{color: 'iconInverse'}} />
          <h1 sx={{ color: "secondaryInverse" }}>
            <FontAwesomeIcon icon={faReact} className="icon" />
            Web Dev
          </h1>
          <p sx={{color: 'text'}}>Check out all my Web Dev Projects!</p>
        </Link>
        <Link
          className="wrapper React-Link box"
          sx={{ backgroundColor: "box" }}
          to="/design"
        >
          <h1 sx={{ color: "secondaryInverse" }}>
            <SiAdobephotoshop className="icon" />
            Graphic Design
          </h1>
          <p sx={{color: 'text'}}>Designs by Me!</p>
        </Link>
      </div>
      <div className="row">
        <Link
        to="/about"
          className="wrapper React-Link box"
          sx={{ backgroundColor: "box" }}
        >
          <h1 sx={{ color: "secondaryInverse" }}>
            <FontAwesomeIcon icon={faListAlt} className="icon" />
            Resume
          </h1>
          <p sx={{color: 'text'}}>Achievments, Experience & More!</p>
        </Link>
        <Link
          className="wrapper React-Link box"
          sx={{ backgroundColor: "box" }}
          to="/travel"
        >
          <IoAirplaneSharp className="bg-icon" sx={{ color: 'iconInverseColor' }}/>
          <h1 sx={{ color: "secondaryInverse" }}>
                <IoLocationSharp className="icon" />
              Travel Diary
              </h1>
              <p sx={{color: 'text'}}>Oh, the Places You'll Go!</p>
        </Link>
      </div>
    </div>
  );
}
