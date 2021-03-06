import React, { Component, Fragment } from 'react';
import {Tab,Row,Col,Container,Nav} from 'react-bootstrap';
import '../Style/Style.css';
import admin  from '../Images/self.jpg';
import star from '../Images/star.png';

import { FaHome ,} from 'react-icons/fa';
import { BsCalendarFill,BsCircleHalf,BsFillPeopleFill ,
BsFillPersonLinesFill,BsCardChecklist,BsCalendar,BsGraphUp,BsGear} from "react-icons/bs";
import NewOrderTable from '../SidebarContent/NewOrderTable';
import VisitorRating from '../SidebarContent/VisitorRating';
import PieChart from '../SidebarContent/PieChart';
import LineChart from '../SidebarContent/LineChart';
import Userinfo from './UserInfo/Userinfo';
import Calender from '../Celender/Calender';
import SelsGraph from '../SidebarContent/SelsGraph';
import TodoList from '../TodoList/TodoList';
import Home from '../SidebarContent/Home';
import VisitorTracking from '../SidebarContent/VisitorTracking';
import Wigets from '../SidebarContent/Wigets';
import MailBox from '../SidebarContent/MailBox';
import Login from '../SidebarContent/Login';




export default class Sidebar extends Component {
    render() {
       document.title="Home";
        return (
            <Fragment>
                <Container fluid={true}>
                <Tab.Container id="left-tabs-example" fixed="bottom" defaultActiveKey="first">
                        <Row>
                            <Col  sm={2} className="border sidebarBg">
                            <div>
                             <h5 className="sidebar-title "><img className="admin" src={star} alt="admin" /> Bussiness Time</h5>
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
                                <Nav.Link eventKey="thard"><BsCircleHalf/> Visitor Rating</Nav.Link>                        
                                </Nav.Item>
                                
                                <Nav.Item>
                                <Nav.Link eventKey="forth"><BsCircleHalf/> Pie Chart</Nav.Link>                        
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="five"><BsCircleHalf/> Line Chart</Nav.Link>                        
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="six"><BsFillPersonLinesFill/> User Information</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="seven"><BsFillPeopleFill/> Unic visitor</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="eight"><BsCalendar/> Calender</Nav.Link>
                               
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="nine"><BsGraphUp/> Sales graph</Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item>
                                <Nav.Link eventKey="ten"><BsCardChecklist/> Todo list</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="eleven"> <BsGear/> Widgets</Nav.Link>
                                </Nav.Item> 
                                <Nav.Item>
                                <Nav.Link eventKey="twelve"> <BsGear/> MailBox</Nav.Link>
                                </Nav.Item> 
                                <Nav.Item>
                                <Nav.Link eventKey="thertin"> <BsGear/> Login</Nav.Link>
                                </Nav.Item> 
                                <Nav.Item>
                                <Nav.Link eventKey="fortin"> <BsGear/> Register</Nav.Link>
                                </Nav.Item> 
                                <Nav.Item>
                                <Nav.Link eventKey="fiftin"> <BsGear/> Settings</Nav.Link>
                                </Nav.Item> 
                            </Nav>
                            </Col>
                            <Col sm={10}>
                            <Tab.Content>
                             <Tab.Pane eventKey="first">
                                   <Home></Home>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                  <h4 className="text-center bg-primary p-2 text-white">Order List</h4>
                                    <NewOrderTable/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="thard">
                                <h4 className="text-center bg-primary p-2 text-white">Visitor Rating</h4>
                                
                                <VisitorRating/>
                               
                              
                                </Tab.Pane>
                                <Tab.Pane eventKey="forth">
                                <h4 className="text-center bg-primary p-2 text-white">Visitor Rating</h4>
                                <PieChart/>
                                <li></li>
                                </Tab.Pane>
                           <Tab.Pane eventKey="five">
                                <h4 className="text-center bg-primary p-2 text-white">Visitor Rating</h4>
                                <LineChart/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six">
                                <h4 className="text-center bg-primary p-2 text-white">User List</h4>
                                 <Userinfo/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven">
                                <h4 className="text-center bg-primary p-2 text-white">Visitor Tracking</h4>
                               <VisitorTracking/>
                                </Tab.Pane>
                                 <Tab.Pane eventKey="eight">
                                 <h4 className="text-center bg-primary p-2 text-white">Calender</h4>
                                 <Calender/>
                                </Tab.Pane>
                                 <Tab.Pane eventKey="nine">
                                 <h4 className="text-center bg-primary p-2 text-white">Sales Graph</h4>
                              <SelsGraph/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ten" >
                                <h4 className="text-center bg-primary p-2 text-white">Todo List</h4>
                              <TodoList/>
                                </Tab.Pane> 
                                <Tab.Pane eventKey="eleven" >
                                <h4 className="text-center bg-primary p-2 text-white">Wigets</h4>
                                  <Wigets/>
                                </Tab.Pane> 
                                <Tab.Pane eventKey="twelve" >
                                <MailBox/>
                             
                                </Tab.Pane> 
                                <Tab.Pane eventKey="thertin" >
                                <h4 className="text-center bg-primary p-2 text-white">Login</h4>
                             <Login/>
                                </Tab.Pane> 
                                <Tab.Pane eventKey="fortin" >
                                <h4 className="text-center bg-primary p-2 text-white">Register</h4>
                              <h3>Setings</h3>
                                </Tab.Pane> 
                                <Tab.Pane eventKey="fiftin" >
                                <h4 className="text-center bg-primary p-2 text-white">Setings</h4>
                              <h3>Setings</h3>
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
