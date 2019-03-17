import React, { Component } from 'react';
import Search from './search';
import logo from '../logo.png';
import { Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const bord = {
  border: "none",
  boxShadow: "0 2px 5px rgba(0,0,0,0.08), 0 3px 7px rgba(0,0,0,0.16)",
  margin: "20px"
}
const curve = {
  borderRadius: "30px",
  paddingLeft: "15px",
  paddingRight: "15px"
}
class ResultCards extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Col sm="12" md="3">
        <Card style={bord}>
          <CardImg top width="100%" src={this.props.image_href} alt="Card image cap" />
          <CardBody>
            <CardTitle><b>{this.props.title}</b></CardTitle>
            <CardSubtitle>Nasa_id: {this.props.id}</CardSubtitle>
            <CardText>Center: {this.props.center}</CardText>
            <Button color= "primary" style={curve}>View Image</Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default ResultCards;