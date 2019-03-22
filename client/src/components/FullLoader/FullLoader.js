import React from 'react'

import './FullLoader.css'

/**
 * This is a full screen loading component.  It should be uses for page changes
 * 
 * @param {boolean} isVisible Should the full loader show? 
 */
const FullLoader = ({ isVisible }) => {
    return isVisible ? (
        <div className="FullLoader">
            <div className="fullloader_container">
                <div><h3>CooMat Drive</h3></div>
                <div><img src="/images/loader.gif" alt="Loading..." /></div>
            </div>
        </div>
    ) : null
}

export default FullLoader