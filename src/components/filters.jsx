import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Label, Button, Collapse } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import Fields from './fields';

class Filters extends Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { 
      collapse: false
      };
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  render(){
    return(
      <React.Fragment>
      <div>
      <Button color="primary" onClick={this.toggle} 
      style={{ 
      marginLeft: '2.5rem', 
      marginRight: '2rem', 
      marginTop: '1rem', 
      marginBottom: '1rem',
      borderRadius: '30px',
      padding: '10px 20px 10px 20px'}}>
      Filters
      </Button>
      <Fields></Fields>
      </div>
      </React.Fragment>
    );
  }
}
export default Filters;