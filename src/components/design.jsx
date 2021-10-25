/** @jsxImportSource theme-ui */
import Masonry from "react-masonry-css";
import { useState } from "react";
import { designs } from "./local-data/data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft as Arrow } from "@fortawesome/free-solid-svg-icons";

export default function Design() {
  const [imgDisplay, setImageDisplay] = useState("hidden");
  var imgIndex = 0;
  function imgLoaded() {
    imgIndex++;
    console.log(imgIndex);
    if (imgIndex === designs.length) {
      setImageDisplay("visible");
    }
  }

  const breakpointColumnsObj = {
    default: 3,
    1320: 2,
    960: 1,
    500: 1
  };

  return (
    <div className="design">
      <h1 sx={{ color: "primary" }}>
        <Link to="/" className="React-Link">
          <FontAwesomeIcon icon={Arrow} className="interactive-icon" />
        </Link>
        Graphic Design.
      </h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        style={{ visibility: imgDisplay }}
       >
        {designs.map((design) => {
          return (
            <div className="img-holder" key={design.websrc}>
              <section sx={{ backgroundColor: "box" }}>
                <picture>
                  <source
                    srcSet={`/img/design/${design.websrc}`}
                    type="image/webp"
                  />
                  <img
                    onLoad={() => {
                      imgLoaded();
                    }}
                    type="image/webp"
                    src={`/img/design/${design.websrc}`}
                    alt={design.caption}
                  />
                </picture>
                <p sx={{ color: "text" }}>{design.caption}</p>
              </section>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
