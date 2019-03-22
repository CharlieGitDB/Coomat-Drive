import React from 'react'
import { Glyphicon } from 'react-bootstrap'

import ErrorService from '../../providers/ErrorService'

import './Error.css'

/**
 * This is the error component that should show for "global errors"
 * 
 * @param {{isVisible: boolean, msg: string}}
 * @param {boolean} isVisible Should the error show on the app?
 * @param {string} msg The error message that is being passed
 */
const Error = ({ isVisible, msg }) => {
    return isVisible ? (
        <div className="Error">
            <div className="error-container">
                <span className="msg">{msg}</span>
                <span className="exit-btn" onClick={ErrorService.removeError}><Glyphicon glyph="remove" /></span>
            </div>
        </div>
    ) : null
}

export default Error