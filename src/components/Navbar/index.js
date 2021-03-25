import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src="../assets/images/logo.transparent.png" alt=""/>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to = "/" activeStyle>Explore</NavLink>
                    <NavLink to = "/" activeStyle>Top Stories</NavLink>
                    <NavLink to = "/" activeStyle>Courses</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to = "/signin">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
