import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Label, Button, Collapse } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class Fields extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      location: 'okay',
      year_start: 'okay',
      year_end: 'okay',
      photographer: 'okay'
      };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeHandler(event){
    this.setState({location: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
  }
  render(){
    return(
          <div className="filters">
            <div className="filter">
              <form onSubmit={this.handleSubmit} name="location">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Location</InputGroupAddon>
                    <Input onChange={this.changeHandler} placeholder="Cape Cavernal" />
                </InputGroup>
              </form>
            </div>
            <div className="filter">
              <form onSubmit={this.handleSubmit} name="year_start">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Start Date</InputGroupAddon>
                    <Input name="location" placeholder="Cape Cavernal" />
                </InputGroup>
              </form>
            </div>
            <div className="filter">
              <form onSubmit={this.handleSubmit} name="year_end">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">End Date</InputGroupAddon>
                    <Input name="location" placeholder="Cape Cavernal" />
                </InputGroup>
              </form>
            </div>
          </div>
    );
  }
}
export default Fields;