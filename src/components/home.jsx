import React, { Component } from 'react';
import {Row,Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import planets from '../solar-system.png';
const headers = {
  padding: "3em",
  paddingTop: "9em",
  paddingLeft: "6em"
}
const newbut = {
  fontFamily: "Avenir",
  borderRadius: "30px",
  padding: "10px",
  paddingLeft: "18px",
  paddingRight: "18px",
  marginTop: "30px"
}
const heading1 = {
  font: "Avenir",
  fontSize: "4em",
  fontWeight: "300"
}
const heading2 = {
  marginTop: "30px",
  font: "Avenir",
  fontWeight: "300"
}
class Home extends Component{
  render(){
    return(
      <Row>
      <Col sm="12" md="6" style={headers}>
        <h1 style={heading1}>
        Welcome to the<br/> NASA photos portal
        </h1>
        <h3 style={heading2}>
        Access pictures from the photos library.<br/> 
        Live position of the ISS.
        </h3>
        <Button color="primary" style={newbut}>
        View on Github
        </Button>
      </Col>
      <Col sm="12" md="6">
        <img src = {planets} class = "planets"/> 
      </Col>
      </Row>
    );
  }
}

export default Home;