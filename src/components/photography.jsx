/** @jsxImportSource theme-ui */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faArrowCircleLeft as Arrow } from '@fortawesome/free-solid-svg-icons'

export default function Photography () {
    return (
        <div className="photography">
            <h1 sx={{color: 'primary'}}>
                <Link to="/" className="React-Link"><FontAwesomeIcon icon={Arrow} className="interactive-icon"/></Link>
                Photography
            </h1>
            <h1 sx={{color: 'text'}}>Nothing here yet...</h1>
        </div>
    )
}