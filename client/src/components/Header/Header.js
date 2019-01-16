import React from 'react'
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'

import UserService from '../../providers/UserService'

import './Header.css'

const Header = ({ hasAuth }) => (
    <Navbar className="Header" fluid>
        <Navbar.Header>
            <Navbar.Brand>
                <span className="coo">Coo</span><span className="mat">Mat</span> <span className="drive">Drive</span>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                { hasAuth ?
                    (
                        <NavItem eventKey={1} href="#" onClick={() => UserService.logOut()}>
                            Sign Out <Glyphicon glyph="log-out" />
                        </NavItem>
                    ) : null
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header