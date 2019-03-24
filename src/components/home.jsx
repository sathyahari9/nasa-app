import React, { Component } from 'react';
import {Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import planets from '../solar-system.png';
import Menu from './menu';
const headers = {
  paddingTop: "4.5em",
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
      <Container>
      <Row>
      <Col sm="12" md={{size: 8, offset: 2}} style={headers}>
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
      <Row>
      <Col sm="12" md={{size: 8, offset: 2}} style={{textAlign: "center", marginTop:"55px"}}>
        <h3 style={{fontWeight: "400"}}>
        Built using
        </h3>
        {/* <h5 style={{fontWeight: "300", marginTop: "25px"}}>
        The web app was built using <i>ReactJS</i> and <i>Redux</i>.<br/> Bootstrapped with <i>create-react-app</i>.
        </h5> */}
        <Row>
          <Col sm="4" md="4">
            <h5 style={{fontWeight: "300", marginTop: "25px"}}>ReactJS</h5>
            <img style={{postion:"relative", margin:"auto", width: "50%"}} src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"/>
          </Col>
          <Col sm="4" md="4">
            <h5 style={{fontWeight: "300", marginTop: "25px"}}>Create-react-app</h5>
            <img style={{postion:"relative", margin:"auto", width: "50%"}} src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"/>
          </Col>
          <Col sm="4" md="4">
            <h5 style={{fontWeight: "300", marginTop: "25px"}}>Redux</h5>
            <img style={{postion:"relative", margin:"auto", width: "50%"}} src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"/>
          </Col>
        </Row>
      </Col>
      </Row>
      </Container>
      </React.Fragment>
    );
  }
}

export default Home;