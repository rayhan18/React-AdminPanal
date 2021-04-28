
import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Calendar from 'react-calendar';

export default function Calender() {
    const [value, onChange,selectRange] = useState(new Date());
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <Calendar
                            onChange={onChange}
                            value={value}
                            selectRange={true}
                    />
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
            
        </div>
    )
}


