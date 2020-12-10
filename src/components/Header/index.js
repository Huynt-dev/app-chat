
import React from 'react';
import {Menubar, Menulogo , Menutext} from "./style";
import {
  Collapse,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';

const Menu = (props) => {



  return (
      <Menubar expand="md">
        <Menulogo href="/">App Chat</Menulogo>
 
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Menutext href="/">Components</Menutext>
            </NavItem>
            <NavItem>
              <Menutext href="/">GitHub</Menutext>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Menubar>
  );
}

export default Menu;