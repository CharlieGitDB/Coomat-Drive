import React from 'react'
import File from '../File/File'

import './Files.css'

const Files = ({ files }) => {
    if (files === null || files.length >= 0) {
        return <h2 className="Files no-files">You currently have no files in your drive</h2>
    } else {
        return (
            <ul>
                {files.map(file => <File key={file.id} {...file} />)}
            </ul>
        )
    }
}

export default Files