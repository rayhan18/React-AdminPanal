import React, { Component,Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import { Container,Row,Col } from 'react-bootstrap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class VisitorTracking extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col sm={12}md={6}lg={6}>
                    {/* // Important! Always set the container height explicitly */}
                        <div style={{ height: '50vh', width: '100%' }}>
                            <GoogleMapReact
                            //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                            </GoogleMapReact>
                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                        
     
     
      </Fragment>
    );
  }
}

export default VisitorTracking;