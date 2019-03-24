import React, { Component } from 'react';
import Search from './search';
import {Row,Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import logo from '../logo.png';
import { withRouter } from 'react-router-dom';

var link = {
  color: "inherit",
  textDecoration: "none"
}

class Menu extends Component{
  constructor(props){
    super(props);
  }
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
        <div className="menuitms">
          <Link to="/" style={link} className={"menu-itm"}>Home</Link>
          <Link to="/search" style={link} className={"menu-itm"}>Photos</Link>
          <Link to="/livefeed"style={link} className={"menu-itm"}>Live Feed</Link>
        </div>
        </Col>
      </Row>
      </div>
    );
  }
}

export default withRouter(Menu);