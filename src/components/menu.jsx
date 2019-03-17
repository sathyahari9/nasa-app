import React, { Component } from 'react';
import Search from './search';
import {Row,Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import logo from '../logo.png';

const link = {
  color: "inherit",
  textDecoration: "none"
}

class Menu extends Component{
  render(){
    return(
      <div className="menu">
      <Row>
        <Col xs="1">
        <img src={logo} className="logo"/>
        </Col>
        <Col xs="6">
          <Search>
          </Search>
        </Col>
        <Col xs="5">
        <Router>
          <div className="menuitms">
            <Link exact to="/" style={link} className="menu-itm">Home</Link>
            <Link exact to="/search" style={link} className="menu-itm">Photos</Link>
            <Link exact to="/livefeed"style={link} className="menu-itm">Live Feed</Link>
            <Link exact to="/login" style={link} className="menu-itm">Log in</Link>
          </div>
        </Router>
        </Col>
      </Row>
      </div>
    );
  }
}

export default Menu;