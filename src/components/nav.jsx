import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';

export default function Navigation(){
    return(
        <div className="nav">
            <FontAwesomeIcon icon={faMoon} className="icon"/>
        </div>
    )
}