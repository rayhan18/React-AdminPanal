import React, { Component,Fragment } from 'react'
import { Container, Row,Col,Card } from 'react-bootstrap'
import { AiOutlineDoubleRight } from "react-icons/ai";
import PieChart from './PieChart';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Container fluit={true}>
                    <Row className = "mt-5">
                       
                        <Col sm='12' md ='3' lg='3'>
                        <Card border="primary" className="bg-primary" style={{ width: '16rem' }}>
                                
                                <Card.Body>
                                <Card.Title className="display-2 text-white">150</Card.Title>
                                <Card.Text className=" text-white ">
                                   New orders
                                </Card.Text>
                                <Card.Footer className=" text-white">More info<AiOutlineDoubleRight /></Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                       
                        <Col sm='12' md ='3' lg='3'>
                        <Card border="primary" className="bg-success" style={{ width: '16rem' }}>
                                
                                <Card.Body>
                                <Card.Title className="display-2 text-white">55%</Card.Title>
                                <Card.Text className=" text-white ">
                                  Bounce Rate
                                </Card.Text>
                                <Card.Footer className=" text-white">More info<AiOutlineDoubleRight/></Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm='12' md ='3' lg='3'>
                        <Card border="primary" className="bg-warning" style={{ width: '16rem' }}>
                                
                                <Card.Body   >
                                <Card.Title className="display-2 text-white">154</Card.Title>
                                <Card.Text className=" text-white ">
                                  User Registration <span></span>

                                </Card.Text>
                                <Card.Footer className=" text-white">More info<AiOutlineDoubleRight /></Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm='12' md ='3' lg='3'>
                        <Card border="primary" className="bg-info" style={{ width: '16rem' }}>
                                
                                <Card.Body>
                                <Card.Title className="display-2 text-white">150</Card.Title>
                                <Card.Text className=" text-white ">
                                   Unic Visitor
                                </Card.Text>
                                <Card.Footer className=" text-white">More info<AiOutlineDoubleRight /></Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className = "mt-3">
                <PieChart/>
                </div>
               
            </Fragment>
        )
    }
}
