import React, { Component } from 'react'
import { Container,Row,Col,Card,ProgressBar } from 'react-bootstrap'
import admin  from '../Images/self.jpg'; 
import { FaCommentDots ,FaListAlt,FaRegFileAlt,FaTeamspeak} from 'react-icons/fa';
export default class Wigets extends Component {
    render() {
        const imgstyle={
            width:'40px',
            height:'40px'
        }
        return (
            <div>
                <h5 class="mb-2">Info Box</h5>
                <Container>
                    <Row>
                     <Col md={3}lg={3}sm={6} className="wigetsCart">
                     <div className="media">

                     <img style={imgstyle} className="align-self-center mr-3" src={admin} alt="Generic "/>
                     <div className="media-body">
                            <h5 className="mt-0 text-warning">Message</h5>
                             <p className=" text-white">1,425</p>
                        </div>
                         </div>
                     </Col>
                     <Col md={3}lg={3}sm={6} className="wigetsCart">
                     <div className="media">

                     <img style={imgstyle} className="align-self-center mr-3" src={admin} alt="Generic "/>
                     <div className="media-body">
                            <h5 className="mt-0 text-success">Book Mark</h5>
                             <p className=" text-white">425</p>
                        </div>
                         </div>
                     </Col>
                     <Col md={3}lg={3}sm={6} className="wigetsCart">
                     <div className="media">

                     <img style={imgstyle} className="align-self-center mr-3" src={admin} alt="Generic "/>
                     <div className="media-body">
                            <h5 className="mt-0 text-white">Upload</h5>
                             <p className=" text-white">125</p>
                        </div>
                         </div>
                     </Col>
                     <Col md={3}lg={3}sm={6} className="wigetsCart">
                     <div className="media">

                     <img style={imgstyle} className="align-self-center mr-3" src={admin} alt="Generic "/>
                     <div className="media-body">
                            <h5 className="mt-0 text-info">Liks</h5>
                             <p className=" text-white">142</p>
                        </div>
                         </div>
                     </Col>
                    </Row>
                </Container><hr/>
                <Container className="mt-4">
                <h4>Info Box With bg<span className="text-danger">-*</span></h4><hr/>
                    <Row >
                        <Col md={3}lg={3}sm={6} >
                        <Card className="bg-primary" style={{ width: '17rem' }}>
                                <Card.Header className="text-white">Header</Card.Header>
                                <Card.Body>
                                <Card.Title className="text-white">Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}lg={3}sm={6} >
                        <Card className="bg-info" style={{ width: '17rem' }}>
                                <Card.Header className="text-white">Header</Card.Header>
                                <Card.Body>
                                <Card.Title className="text-white">Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}lg={3}sm={6} >
                        <Card className="bg-warning" style={{ width: '17rem' }}>
                                <Card.Header className="text-white">Header</Card.Header>
                                <Card.Body>
                                <Card.Title className="text-white">Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}lg={3}sm={6} >
                        <Card className="bg-danger" style={{ width: '17rem' }}>
                                <Card.Header className="text-white">Header</Card.Header>
                                <Card.Body>
                                <Card.Title className="text-white">Primary Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk
                                    of the card's content.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container><hr/>
                <Container style={{marginBottom:"24px"}}>
                    <h4>Info Box With bg<span className="text-danger">-*</span></h4><hr/>
                    <Row>
                    <Col md={3}lg={3}sm={6}className="mb-5 wigetsCart" >
                    <div className="media">
                          <span className="iconStyle"><FaCommentDots/></span> 
                            <div className="media-body">
                                <h5 className="mt-0 text-success">Book Mark</h5>                                   
                                    <ProgressBar variant="success progress" now={70} />
                                <p className=" text-white">70% Increase in 30 Days</p>
                            </div>
                                </div>                                                                           
                        </Col>
                        <Col md={3}lg={3}sm={6}className="mb-5 wigetsCart" >
                    <div className="media">
                    <span className="iconStyle"><FaTeamspeak/></span> 
                            <div className="media-body">
                                <h5 className="mt-0 text-success">Book Mark</h5>                                   
                                    <ProgressBar variant="success progress" now={70} />
                                <p className=" text-white">70% Increase in 30 Days</p>
                            </div>
                                </div>                                                                           
                        </Col>
                        <Col md={3}lg={3}sm={6}className="mb-5 wigetsCart" >
                    <div className="media">
                    <span className="iconStyle"><FaRegFileAlt/></span> 
                            <div className="media-body">
                                <h5 className="mt-0 text-success">Book Mark</h5>                                   
                                    <ProgressBar variant="success progress" now={70} />
                                <p className=" text-white">70% Increase in 30 Days</p>
                            </div>
                                </div>                                                                           
                        </Col>
                        <Col md={3}lg={3}sm={6}className="mb-5 wigetsCart" >
                    <div className="media">
                    <span className="iconStyle"><FaListAlt/></span> 
                            <div className="media-body">
                                <h5 className="mt-0 text-success">Book Mark</h5>                                   
                                    <ProgressBar variant="success progress" now={70} />
                                <p className=" text-white">70% Increase in 30 Days</p>
                            </div>
                                </div>                                                                           
                        </Col>
                    </Row>
                </Container>
        
            </div>
        )
    }
}
