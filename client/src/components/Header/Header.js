import React from 'react'
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap'

import HeaderSearch from '../HeaderSearch/HeaderSearch'

import './Header.css'

/**
 * @param {{hasAuth: boolean, logOut: function}}
 * @param {boolean} hasAuth Does the user have authentication for the app?
 * @param {function} logOut When fired logs the user of out the application
 */
const Header = ({ hasAuth, logOut }) => (
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
                        <NavItem eventKey={1} href="#" onClick={() => logOut()}>
                            Sign Out <Glyphicon glyph="log-out" />
                        </NavItem>
                    ) : null
                }
            </Nav>
            {hasAuth ? <HeaderSearch /> : null}
        </Navbar.Collapse>
    </Navbar>
)

export default Header