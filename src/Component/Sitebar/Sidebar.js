import React, { Component, Fragment } from 'react'
import {Tab,Row,Col,Container,Nav} from 'react-bootstrap'
import '../Style/Style.css'

export default class Sidebar extends Component {
    render() {
       
        return (
            <Fragment>
                <Container fluid={true}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col  sm={2} className="border sidebarBg">
                                <h3 className="text-white ">Our Company</h3><hr className="text-white"/>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="thard">Tab 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="six">Tab 6</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <li>list</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                              <li>list 2</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="thard">
                              <li>list 3</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                              <li>list 4</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                              <li>list 5</li>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                              <li>list 6</li>
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
