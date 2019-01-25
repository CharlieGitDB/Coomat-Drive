import React from 'react'
import { Glyphicon } from 'react-bootstrap'

import './File.css'

const ICON_TYPES = {
    image: 'picture',
    text: 'text-size'
}

const File = (props) => (
    <li className="File">
        <div className="file-container">
            <span className="file-icon">
                <Glyphicon glyph={ICON_TYPES[props.type]} />
            </span>
            <h3>{props.name}</h3>
            <h5>{props.updatedAt}</h5>
        </div>
    </li>
)

export default File