import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Navigation = () => (
  <div style={{ marginBottom: 20 }}>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">KnowEat</NavbarBrand>        
    </Navbar>
  </div>
)

export default Navigation