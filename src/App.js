

import React, { Fragment } from 'react';

import Sidebar from './Component/Sitebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/Style/Style.css'
import Navigation from './Component/Navbar/Navigation';
import Fotter from './Component/Fotter/Fotter';
function App() {
  return (
    <Fragment >
      <Navigation/>
     <Sidebar/>
      <Fotter/>
    </Fragment>
  );
}

export default App;
