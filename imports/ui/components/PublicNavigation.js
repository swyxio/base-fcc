import React from 'react';
import { IndexLinkContainer } from 'react-router-bootstrap';
// import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
// import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

const PublicNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
    </Nav>
    <Nav pullRight>
      <LoginButtons />
    </Nav>
  </div>
);

export default PublicNavigation;


// reference http://howtocenterincss.com/#contentType=div&horizontal=center&vertical=middle&browser.IE=none
// <div style={{'display':'flex', 'justify-content':'center', 'align-items':'center'}}>

    // <LinkContainer to="signup">
    //   <NavItem eventKey={ 1 } href="/signup">Sign Up</NavItem>
    // </LinkContainer>
    // <LinkContainer to="login">
    //   <NavItem eventKey={ 2 } href="/login">Log In</NavItem>
    // </LinkContainer>

    // <Nav pullRight>
    //   <NavDropdown eventKey={ 3 } title="Login/Signup" id="basic-nav-dropdown">
    //     <MenuItem eventKey={ 3.1 } ><LoginButtons visible/></MenuItem>
    //   </NavDropdown>
    // </Nav>