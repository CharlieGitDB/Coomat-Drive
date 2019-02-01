import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import Content from '../../components/Content/Content'
import DropZone from '../../components/DropZone/DropZone'
import Files from '../../components/Files/Files'

import './Base.css'

let fakeFiles = [{ id: 1, name: 'Image.jpg', type: 'image', updatedAt: new Date().toDateString() }, { id: 2, name: 'wow.txt', type: 'text', updatedAt: new Date().toDateString() }, { id: 3, name: 'joey.txt', type: 'text', updatedAt: new Date().toDateString() }]
// let fakeFiles = null
const Base = () => (
    <div className="Base">
        <SideBar />
        <Content>
            <DropZone>
                <Files files={fakeFiles} />
            </DropZone>
        </Content>
    </div>
)

export default Base