import React, { Component, Fragment } from 'react'
import {Tab,Row,Col,Container,Nav} from 'react-bootstrap'
import '../Style/Style.css'
import admin  from '../Images/eahyaimg.jpg'
import star from '../Images/star.png'
import { FaHome ,} from 'react-icons/fa';
import { BsCalendarFill,BsCircleHalf,BsFillPeopleFill ,
BsFillPersonLinesFill,BsCardChecklist,BsCalendar,BsGraphUp,BsGear} from "react-icons/bs";


export default class Sidebar extends Component {
    render() {
       document.title="Home"
        return (
            <Fragment>
                <Container fluid={true}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col  sm={2} className="border sidebarBg">
                            <div>
                             <h5 className="sidebar-title "><img className="admin" src={star} alt="admin" /> C.Name</h5>
                             <h5 className="text-white border-bottom"><img className="admin" src={admin} alt="admin" /> Admin</h5>
                            </div>
                               
                               
                            <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> <FaHome /> Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second"><BsCalendarFill/> New order
                              
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="thard"><BsCircleHalf/> Bounce rate</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth"><BsFillPersonLinesFill/> User registration</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fifth"><BsFillPeopleFill/> Unic visitor</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="six"><BsCalendar/> Calender</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="seven"><BsGraphUp/> Sales graph</Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item>
                                <Nav.Link eventKey="eight"><BsCardChecklist/> Todo list</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="nine"> <BsGear/> Setings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={10}>
                            <Tab.Content>
                             <Tab.Pane eventKey="first">
                                    <li>Home</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <li>New order</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="thard">
                              <li>list 2</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                              <li>list 3</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                              <li>list 4</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                              <li>list 5</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                              <li>list 6</li>
                                </Tab.Pane>
                                 <Tab.Pane eventKey="eight">
                              <li>list 7</li>
                                </Tab.Pane>
                                 <Tab.Pane eventKey="nine">
                              <li>list 8</li>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>

                        </Row>
                        </Tab.Container>
                </Container>
 
            </Fragment>
        )
    }
}
