//libraries
import React from 'react';
//components
import ReactAux from '../ReactAux/ReactAux';
import TopNav from './TopNav/TopNav';
import NavMobile from './NavMobile/NavMobile';

const Navigation = () => (
  <ReactAux>
    <TopNav />
    <NavMobile />
  </ReactAux>
)

export default Navigation;
