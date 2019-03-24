import React, { Component } from 'react';
import Search from './search';
import logo from '../logo.png';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {
  FacebookShareButton,
  FacebookShareCount,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  EmailIcon,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  EmailShareButton,
} from 'react-share';

const mods = {
  padding: "1.5em",
  height: "500px",
  overflowY: "scroll",
}
const share = {
  cursor: "pointer",
}
const fonts = {
  fontFamily: "Avenir",
}
const image = {
  position: "relative",
  margin: "auto",
  width: "100%",
}
const space = {
  marginTop: "25px",
}
const bord = {
  fontFamily: "Avenir",
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
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
  }));
  }
  formatted(string){
    let date, dateLength, dateIndex;
    date = this.props.date_created;
    dateLength = this.props.date_created.length;
    dateIndex = this.props.date_created.indexOf('T');
    let i;
    date = date.substring(0,dateIndex);
    return date;
  }
  render(){
    return(
      <Col sm="12" md="3">
        <Card style={bord}>
          <CardImg top width="auto" height="300px" src={this.props.image_href} alt="Card image cap" />
          <CardBody>
            <CardTitle><b>{this.props.title}</b></CardTitle>
            <CardSubtitle>Nasa_id: {this.props.id}</CardSubtitle>
            <CardText>Center: {this.props.center}</CardText>
            <Button color= "primary" style={curve} onClick={this.toggle}>View Image</Button>
            <Modal style={fonts} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}><b>{this.props.title}</b></ModalHeader>
              <ModalBody style={mods} scrollable={true}>
               <img style={image} src={this.props.image_href}/>
               <h5 style={space}><b>NASA ID:</b> {this.props.id}</h5>
               <h5 style={space}><b>Date created:</b> {this.formatted()}</h5>
               <p style={space}><h5><b>Description:</b></h5>{this.props.description}</p>
              </ModalBody>
              <ModalFooter>
                <TwitterShareButton
                  style={share}
                  url={this.props.image_href}
                  title={this.props.title}
                  className="Demo__some-network__share-button">
                  <TwitterIcon
                    size={32}
                    round />
                </TwitterShareButton>
                <FacebookShareButton
                  style={share}
                  url={this.props.image_href}
                  title={this.props.title}
                  className="Demo__some-network__share-button">
                  <FacebookIcon
                    size={32}
                    round />
                </FacebookShareButton>
                <EmailShareButton
                  style={share}
                  url={this.props.image_href}
                  title={this.props.title}
                  className="Demo__some-network__share-button">
                  <EmailIcon
                    size={32}
                    round />
                </EmailShareButton>
                <Button color="primary" style={curve} href={this.props.image_href}>Download</Button>{' '}
                <Button color="secondary" style={curve} onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default ResultCards;