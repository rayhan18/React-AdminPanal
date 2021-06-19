import React, { Component } from 'react'
import {Nav,Navbar} from 'react-bootstrap'
export default class Fotter extends Component {
    render() {
         const navTex={
            color:'white'
        }
        return (
            <div>
               <Navbar collapseOnSelect expand="lg" style={{ marginLeft:'234px', backgroundColor: '#0a3794'}}>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features" style={navTex}>Copyright © 2021-2021 Developar-Rayhan All rights reserved.</Nav.Link>
 
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets" style={navTex}>version-1.0.0</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar> 
            </div>
        )
    }
}
