import React, { Component } from 'react';
import {Row,Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import planets from '../solar-system.png';
import Menu from './menu';
const headers = {
  padding: "2em",
  paddingTop: "9em",
  textAlign: "center"
}
const newbut = {
  fontFamily: "Avenir",
  borderRadius: "30px",
  padding: "10px",
  paddingLeft: "18px",
  paddingRight: "18px",
  position: "relative",
  margin: "auto",
  marginTop: "30px"
}
const heading1 = {
  font: "Avenir",
  fontSize: "4em",
  fontWeight: "300",
  color: "#000"
}
const heading2 = {
  marginTop: "30px",
  font: "Avenir",
  fontWeight: "300",
  color: "#000"
}
class Home extends Component{
  render(){
    document.body.style = "background: url('../back.jpg') center center; background-size: cover;";
    return(
      <React.Fragment>
      <Row>
      <Col sm="12" md={{size: 6, offset: 3}} style={headers}>
        <h1 style={heading1}>
        NASA photos portal
        </h1>
        <h3 style={heading2}>
        Use the search bar to get pictures from the NASA photos library. 
        Click on the ISS tab to view it's live position
        </h3>
        <Button color="primary" style={newbut} align="center" href="https://github.com/sathyahari9/nasa-app">
          View on Github
        </Button>
      </Col>
      </Row>
      </React.Fragment>
    );
  }
}

export default Home;