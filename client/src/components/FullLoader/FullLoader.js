import React from 'react'

import './FullLoader.css'

const FullLoader = () => (
    <div className="FullLoader">
        <div className="fullloader_container">
            <div><h3>CooMat Drive</h3></div>
            <div><img src="/images/loader.gif" alt="Loading..." /></div>
        </div>
    </div>
)

export default FullLoader