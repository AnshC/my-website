import React from 'react';
import {Link} from 'react-router-dom'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faGithub, faNpm} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import Particles from 'react-particles-js';

import {projects} from './projects';
import ProjectCard from './project.card';

export default function Home(){
    return(
        <div className="home" id="home">
            <div className="hero">
                <div className="profile-wrapper">
                    <div className="circle">
                        <div className="circle-2">
                            <img src="/img/profile.png" alt="profile pic" className="profile"/>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h1>I'm Ansh Chauhan.</h1>
                    <p className="sub">Front-end Web Designer/Developer</p>
                    <p className="sub">Graphic Designer</p>
                    <ul>
                        <a href="https://instagram.com/ansh.c05" className="icon"><FontAwesomeIcon icon={faInstagram}/></a>
                        <a href="https://github.com/AnshC" className="icon"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="https://www.npmjs.com/~anshc" className="icon"><FontAwesomeIcon icon={faNpm}/></a>
                        <a href="mailto:anshc2005@gmail.com" className="icon"><FontAwesomeIcon icon={faEnvelope}/></a>
                    </ul>
                </div>     
            </div>
            <Particles id="particles-js"
                params={{
                    particles: {
                        line_linked:{
                            enable: false
                        },
                        size: {
                            value: 7,
                            random: true
                        },
                        color: {
                            value: '#e14594'
                        },
                        move: {
                            speed: 1
                        }
                    }
                }}
            />
            <div className="main-wrapper">
                <div className="about main">
                    <h1 className="head">About Me!</h1>
                    <p>Hello! I’m Ansh Chauhan, a high school senior (BIS’23) who lives in Jodhpur. Technology is my thing. I’m a graphic designer and code enthusiast. I’ve been practicing graphic design for about 3 years. I am a technology officer in <a href="https://unitedunderarts.org">United Under Arts</a>, a non-profit, student run organisation, where I design monthly newsletters and other digital media for them.</p>
                    <p>My coding journey started when I was in 4th grade; I started with <a href="https://scratch.mit.edu">scratch</a>. Currently I develop frontend websites/webapps (with a sprinkle of backend). I’ve moved on from scratch to python and JavaScript, as of now.</p>
                    <p>In my free time, I tinker around with Arduinos, Raspberry Pi/s and I’ve developed a strong passion for computer engineering, which led me to build my own computer!</p>
                </div>
                <div className="skills main">
                    <h1 className="head">Skills</h1>
                    <div className="frontend">
                        <h1 className="head">FRONT-END</h1>
                        <div className="icons">
                            <img src="/img/icons/javascript.png" alt="Java Script Logo" className="icon"/>
                            <img src="/img/icons/html.png" alt="HTML Logo" className="icon"/>
                            <img src="/img/icons/css.png" alt="CSS Logo" className="icon"/>
                            <img src="/img/icons/reactjs.png" alt="ReactJS Logo" className="icon" id="react-icon"/>
                        </div>
                    </div>
                    <div className="backend">
                        <h1 className="head">BACK  END</h1>
                        <div className="icons">
                            <img src="/img/icons/firebase.png" alt="Firebase Logo" className="icon"/>
                            <img src="/img/icons/nodejs.png" alt="NodeJS Logo" className="icon"/>
                        </div>
                    </div>
                    <div className="digital-media">
                        <h1 className="head">DIGITAL  MEDIA</h1>
                        <div className="icons">
                            <img src="/img/icons/photoshop.png" alt="Photoshop Logo" className="icon"/>
                            <img src="/img/icons/illustrator.png" alt="Illustrator Logo" className="icon"/>
                            <img src="/img/icons/premierpro.png" alt="Premier Pro Logo" className="icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects">
            <div className="sub-nav">
                <h1 className="head">Project Page</h1>
                <ul className="list">
                    <li><Link to="/design" className="React-Link">Design Portfolio</Link></li>
                    <li>Resumé</li>
                </ul>
            </div>
            <div className="cards">
            {
                projects.map((project) =>{
                    return(
                        <ProjectCard
                            name={project.name}
                            description={project.description}
                            link={project.link.url}
                            demo={project.demo}
                            state={project.link.state}
                            key={project.key}
                        />
                    )
                })
            }
            </div>
                <div className="websites main">
                    <h1 className="head">Websites I'm Proud of.</h1>
                    <div className="frames">
                        <div className="website">
                            <div className="controls">
                                <span id="red"></span>
                                <span id="yellow"></span>
                                <span id="green"></span>
                            </div>
                            <p className="url">pacificsparkles.com</p>
                            <div className="img" style={{backgroundImage: "url(/img/websites/pacificsparkles.png)"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
