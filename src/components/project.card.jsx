import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function ProjectCard(props){
    return(
        <div className="project-card">
            <a href={props.demo} target="_blank" className="nostyle-a card-a">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
                {props.state == "n/a" ? 
                    null
                    : 
                    <a href={props.link}>View on 
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </a>
                }
            </a>
        </div>  
    )
}