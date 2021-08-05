import React from 'react';
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'

export default function Design(){
    return(
        <div className="design">
            <div className="hero">
                <div className="content">
                    <h1>Welcome to my Design Portfolio!</h1>
                    <Link to="/" className="link"><FontAwesomeIcon icon={faArrowCircleLeft}/> Go to main website</Link>
                </div>
            </div>
            <div className="cards">
                <div className="card" style={{backgroundImage: "url(/img/design/cat.jpg)"}}></div>
                <div className="card" style={{backgroundImage: "url(/img/design/diamond.png)"}}></div>
                <div className="card" style={{backgroundImage: "url(/img/design/head.png)"}}></div>
                <div className="card" style={{backgroundImage: "url(/img/design/jellyfish.png)"}}></div>
                <div className="card" style={{backgroundImage: "url(/img/design/profile.png)"}}></div>
                <div className="card" style={{backgroundImage: "url(/img/design/teenage.png)"}}></div>
                <div className="card" style={{backgroundImage: "url(/img/design/wolf.jpg)"}}></div>
            </div>
        </div>
    )
}