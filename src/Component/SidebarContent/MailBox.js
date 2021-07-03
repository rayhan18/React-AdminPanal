import React, { Component } from 'react'
import { Container,Row,Col,Card,ListGroup,Table,Badge } from 'react-bootstrap'
import { FaSun,FaEnvelopeOpen,FaEnvelope,FaFileAlt,FaFilter,FaRegTrashAlt,FaSearch} from 'react-icons/fa';

export default class MailBox extends Component {
    render() {
        const styleDiv={
            border:" 5px solid #bacaea",    
            background: "#2664e4"
        }

        return (
            <div>

                <Container className="mt-5">
                    
                    <Row>
                            
                        <Col sm={12} md={4} lg={3} >
                        
  
                        <Card style={{ width: '17rem' }} >
                            <Card.Header className="bg-primary text-white text-center font-weight-bold">Featured</Card.Header>
                            <ListGroup variant="flush">
                              <a href="/">  <ListGroup.Item><FaEnvelope/>Inbox <span style={{marginLeft:'105px'}}><Badge pill variant="warning"> 5
                               </Badge></span></ListGroup.Item></a>
                              <a href="/">  <ListGroup.Item><FaEnvelopeOpen/>Sent
                              <span style={{marginLeft:'105px'}}><Badge pill variant="warning"> Warning
                               </Badge></span></ListGroup.Item></a>
                              <a href="/"> <ListGroup.Item> <FaFileAlt/>Draft</ListGroup.Item></a>
                              <a href="/">   <ListGroup.Item><FaFilter/>Junk <span style={{marginLeft:'105px'}}><Badge pill variant="danger"> danger
                               </Badge></span></ListGroup.Item></a>
                              <a href="/">  <ListGroup.Item> <FaRegTrashAlt/>Trash</ListGroup.Item></a>
                            </ListGroup>
                            </Card>

  

                        </Col>
                        <Col sm={12} md={8} lg={9} className="tablestyle">
                            <div className="d-flex  " style={styleDiv}>
                                <p ><strong className=" mt-2 ml-3 font-weight-bold text-white">Inbox</strong></p>
                                {/* <p className=" ml-auto">ddd</p> */}
                                <div style={{width:'30%'}} class="input-group mb-3 ml-auto mt-2">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    <div class="input-group-append ">
                                        <span class="input-group-text" id="basic-addon2"><FaSearch/></span>
                                    </div>
                                    </div>
                            </div>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td>Admin Rayhan</td>
                                <td>Trying to find a solution to this problem...</td>
                                <td>@twitter</td>
                                <td>5 mins ago</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td>Admin Rayhan</td>
                                <td>Trying to find a solution to this problem...</td>
                                <td>@twitter</td>
                                <td>5 mins ago</td>
                                </tr>
                               
                                <tr>
                                <td>3</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>40 mins ago</td>
                                </tr>
                                <tr>
                                <td>4</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>40 mins ago</td>
                                </tr>
                                <tr>
                                <td>5</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>40 mins ago</td>
                                </tr>
                                <tr>
                                <td>6</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>40 mins ago</td>
                                </tr>
                                <tr>
                                <td>7</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>40 mins ago</td>
                                </tr>
                                <tr>
                                <td>8</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>40 mins ago</td>
                                </tr>
                                <tr>
                                <td>9</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>40 mins ago</td>
                                </tr>
                                <tr>
                                <td>10</td>
                                <td><span className="text-warning w-50 h-25"><FaSun/></span></td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>40 mins ago</td>
                                </tr>
                            </tbody>
                            </Table>
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
