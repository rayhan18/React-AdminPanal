import React, { Component, Fragment } from 'react'
import  {Navbar,Nav}from 'react-bootstrap'
import { BsFillBellFill,BsChatQuote } from "react-icons/bs";
export default class Navigation extends Component {
    render() {
        const navTex={
            color:'white'
        }
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="md"  style={{marginLeft:'234px',marginTop:'0px',backgroundColor: '#0a3794'}} className="navStyle">
                    <Navbar.Brand style={navTex} href="#home">Deshbord</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link style={navTex} href="#features">Home</Nav.Link>
                        <Nav.Link style={navTex} href="#pricing">Pricing</Nav.Link>
                       
                        </Nav>
                        <Nav>
                        <Nav.Link style={navTex} href="#deets"><BsChatQuote/></Nav.Link>
                        
                            <Nav.Link style={navTex} href="#deets"><BsFillBellFill/></Nav.Link>
                             <Nav.Link style={navTex} href="#deets">Logout</Nav.Link>
                       
                        </Nav>
                      </Navbar.Collapse>
                    </Navbar>
            </Fragment>
        )
    }
}
