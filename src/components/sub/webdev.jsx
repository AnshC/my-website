/** @jsxImportSource theme-ui */
import { projects } from '../data/data'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleLeft as Arrow } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function WebDevelopment () {
    return (
        <div className="webdev">
            <h1 sx={{color: 'primary'}}>
                <Link to="/" className="React-Link"><FontAwesomeIcon icon={Arrow} className="interactive-icon"/></Link>
                Web Dev.
            </h1>
            <div className="row">
                {projects.map((project)=>{
                    return (
                        <ProjectComponent
                            name={project.name}
                            desc={project.description}
                            gitlink={project.link.url}
                            demo={project.link.demo}
                            key={project.key}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function ProjectComponent (props) {
    return (
        <div className="project box" sx={{backgroundColor: 'box'}} onClick={()=>{window.location.replace(props.demo)}}>
            <h1 sx={{color: 'secondaryInverse'}}>{props.name}</h1>
            <p sx={{color: 'text'}}>{props.desc}</p>
            <a href={props.gitlink} style={{zIndex: 5}} className="React-Link" sx={{color: 'secondaryInverse'}}>
                <FontAwesomeIcon icon={faGithub} className="icon"/>
                Github
            </a>
        </div>
    )
}