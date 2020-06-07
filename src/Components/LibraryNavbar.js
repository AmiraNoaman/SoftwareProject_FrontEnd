import React from 'react'
import './LibraryNavbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom'


const LibraryNavbar=()=>{
    return (
        <Navbar collapseOnSelect expand="lg" fixed='top' className='ml0 pt3 react-navi navbar-dark'>
            {/* <Link to='/HomePage'><Navbar.Brand className='' href=""><span className='logo pl6 ml5 navbar-logo'></span></Navbar.Brand></Link> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className=' ma2 pl7 white tc fw7'>
                    {/* <Link to='/Playlist'><li className='ph3'><a href='' className='white anchor '>Playlist</a></li></Link>
                    <Link to='/Albums'><li className='ph3'><a href='' className='white '>Albums</a></li></Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default LibraryNavbar



