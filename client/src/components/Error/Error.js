import React from 'react'
import { Glyphicon } from 'react-bootstrap'

import ErrorService from '../../providers/ErrorService'

import './Error.css'

const Error = ({ msg }) => (
    <div className="Error">
        <div className="error-container">
            <span className="msg">{msg}</span>
            <span className="exit-btn" onClick={ErrorService.removeError}><Glyphicon glyph="remove" /></span>
        </div>
    </div>
)

export default Error