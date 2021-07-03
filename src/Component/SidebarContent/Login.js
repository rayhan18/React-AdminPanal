import React, { Component } from 'react'

import {Container,Row,Col,Form,Button} from 'react-bootstrap'
import admin  from '../Images/self.jpg';

export default class Login extends Component {
    render() {
        const imgstyle={
            width:'100px',
            height:'100px',
            marginTop: '-66px',
            border:' 5px solid gray'
        }
        const loginHeading={
            background: 'blueviolet',
             padding:' 10px',
             height: '120px'
        }
        return (
            <div>
                <Container className="mt-5 loginContainer">
                    <Row>
                    <Col sm={12} md={6} lg={2}>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="loginimg">
                        {/* <img style={{width:'500px',height:'500px'}}src={bg}alt="login img"/> */}
                        <h3 className="logintext"> Welcome Page </h3>
                        <h5 className="text-center" style={{fontFamily: 'cursive'}}> Signin To Continue Access</h5>
                        </Col>
                        <Col className="loginForm" sm={12} md={6} lg={4}>
                         <div>
                         <h3 style={loginHeading} className=" logintext2">Admin Login</h3>
                         <img class="rounded mx-auto d-block mb-5 "style={imgstyle} src={admin} alt ="admin"/>
                         </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                               
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                               
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <div className="col-md-12 text-center ">
                            <Button className="m-auto "  type="submit" size="md" active>
                                Submit
                            </Button>
                            </div>
                             
                            </Form>
                        </Col>
                        <Col sm={12} md={6} lg={2}>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
