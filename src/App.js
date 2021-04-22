

import React, { Fragment } from 'react';
import { SidebarHeader } from 'react-pro-sidebar';
import Sidebar from './Component/Sitebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/Style/Style.css'
import Navigation from './Component/Navbar/Navigation';

function App() {
  return (
    <Fragment >
      <Navigation/>
      <Sidebar/>
      
    </Fragment>
  );
}

export default App;
