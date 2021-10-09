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
                            <ImgComponent imgSource={design.src} imgCaption={design.caption}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

function ImgComponent (props) {
    return (
        <div className="img-holder" sx={{backgroundColor: 'box'}}>
            <img src={`/img/design/${props.imgSource}`} alt={props.imgCaption} />
            <p sx={{color: 'text'}}>{props.imgCaption}</p>
        </div>
    )
}