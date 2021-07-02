import React, { Component } from 'react'
import { Container,Row,Col,Card,ListGroup,Table } from 'react-bootstrap'
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
                        <Card style={{ width: '17rem' }}>
                            <Card.Header>Featured</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                            </Card>
                        </Col>
                        <Col sm={12} md={8} lg={9} className="tablestyle">
                            <div className="d-flex " style={styleDiv}>
                                <p ><strong className="ml-3">Inbox</strong></p>
                                <p className=" ml-auto">ddd</p>
                            </div>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
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
