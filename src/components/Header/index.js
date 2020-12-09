
import React from 'react';
import {Menubar} from "./style";
import {
  Collapse,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Menu = (props) => {



  return (
      <Menubar expand="md">
        <NavbarBrand href="/">App Chat</NavbarBrand>
 
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Menubar>
  );
}

export default Menu;