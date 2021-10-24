/** @jsxImportSource theme-ui */
import { designs } from "./local-data/data"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft as Arrow } from '@fortawesome/free-solid-svg-icons'

export default function Design () {
    return (
        <div className="design">
            <h1 sx={{color: 'primary'}}>
                <Link to="/" className="React-Link">
                    <FontAwesomeIcon icon={Arrow} className="interactive-icon"/>
                </Link>
                Graphic Design.
            </h1>
            <div className="row">
                {
                    designs.map((design)=>{
                        return (
                            <ImgComponent webSrc={design.websrc} imgSource={design.src} imgCaption={design.caption}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

function ImgComponent (props) {
    return (
        <div className="img-holder">
            <section sx={{backgroundColor: 'box'}}> 
                <picture>
                    <source srcSet={`/img/design/${props.webSrc}`} type="image/webp" />
                    <img type="image/webp" src={`/img/design/${props.webSrc}`} alt={props.imgCaption} />
                </picture>
                <p sx={{color: 'text'}}>{props.imgCaption}</p>
            </section>
        </div>
    )
}