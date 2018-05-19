import React, { Component } from 'react';
import './App.css';
import MyNavBarLogin from './MyNavBarLogin';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class MyNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  
  render() {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">EasyBuy</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <MyNavBarLogin/>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
}

export default MyNavBar;




