import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons';
import {designs} from './designs';
export default function Design(){
    const [images, setImages] = useState(designs)
    const [imagesLoaded, setImagesLoaded] = useState(false)
    var imageCount = 0;
    function loadImage () {
        imageCount++;
    }
    useEffect(()=>{
        if (imageCount === images.length) {
            setImagesLoaded(true)
        }
    })
    return(
        <div className="design">
            <div className="hero">
                <div className="content">
                    <h1>Welcome to my Design Portfolio!</h1>
                    <Link to="/" className="link"><FontAwesomeIcon icon={faArrowCircleLeft}/> Go to main website</Link>
                </div>
            </div>
            <div className="cards">
                {images.map((image)=>{
                    return (
                        <a href={`/img/design/${image}`}><img key={image} src={`/img/design/${image}`} alt="My Image" className="card" onLoad={loadImage} /></a>
                    )
                })}
            </div>
            {imagesLoaded ? <div className="loader">Loading Images...</div> : null}
        </div>
    )
}