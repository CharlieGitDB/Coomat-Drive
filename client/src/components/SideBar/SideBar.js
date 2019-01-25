import React from 'react'
import { Button, Glyphicon, Nav, NavItem } from 'react-bootstrap'

import './SideBar.css'

const SideBar = () => (
    <aside className="SideBar">
        <Button block className="new-btn">
            <span className="new-icon"><Glyphicon glyph="plus" /></span>
            <span className="new-text">New</span>
        </Button>
        <Nav className="menu-items" bsStyle="pills" stacked>
            <NavItem>
                <Glyphicon glyph="cloud" />
                <span className="menu-item">My Drive</span>
            </NavItem>
            <NavItem>
                <Glyphicon glyph="trash" />
                <span className="menu-item">Trash</span>
            </NavItem>
        </Nav>
    </aside>
)

export default SideBar