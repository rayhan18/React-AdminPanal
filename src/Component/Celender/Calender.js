
import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calender() {
    const [value, onChange] = useState(new Date());

    const colStyle={
        webkitBoxShadow: '1px 6px 11px -2px rgba(0,0,0,0.75)', 
        boxShadow: '1px 6px 11px -2px rgba(0,0,0,0.75)',
        padding: '10px'
    }
    return (
        <div>
            <Container style={{background:'lightgray',paddingBottom: '30px'}}>
                <Row >
                    <Col  className="mt-3 " sm={12} md={6} lg={4}>
                        <div style={colStyle}>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            selectRange={true}
                    />
                        </div>
                   
                    </Col>
                    <Col  className="mt-3 " sm={12} md={6} lg={4}>
                        <div style={colStyle}>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            selectRange={true}
                    />
                        </div>
                   
                    </Col>
                    <Col  className="mt-3 " sm={12} md={6} lg={4}>
                        <div style={colStyle}>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            selectRange={true}
                    />
                        </div>
                   
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}


