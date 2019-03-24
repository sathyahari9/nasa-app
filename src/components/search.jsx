import React, { Component } from 'react';
import {Row,Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Collapse} from 'reactstrap';
import {connect} from 'react-redux';
import {searchResults} from "../actions";
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const search = {
  borderRadius: '10',
  border: '0.5px solid rgba(0,0,0,.0005)',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.16)',
  padding: '25px',
  fontFamily: 'Avenir',
  fontWeight: '500'
}

class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
      redirect: false,
      location: "",
      year_start: "",
      year_end: "",
      photographer: "",
      collapse: false
    }
    this.searchOnMedium();
    this.toggle = this.toggle.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  changeHandler(event){
    if (event.target.name == "location")
    {
      this.setState({location: event.target.value})
    }
    else if (event.target.name == "year_end")
    {
      this.setState({year_end: event.target.value})
    }
    else if (event.target.name == "year_start")
    {
      this.setState({year_start: event.target.value})
    }
  }
  handleSubmit(event){
    this.performSearch();
    event.preventDefault();
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/search' />
    }
  }
  searchHandler(event){
    console.log(event.target.value)
    this.setState({
      value: event.target.value,
    })
  }
  submitHandler(event){
    this.searchOnMedium()
    event.preventDefault()
  }
  searchOnMedium = () => {
  let URL = "https://images-api.nasa.gov/search?media_type=image&q="+ this.state.value + "&location=" + this.state.location;
  fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    }).then((response) => {
      response.json().then((data) => {
        this.props.searchResults(data);
        console.log(data)
      })
    }).catch((error) => console.log(error));
  }

  render(){
    return(
      <React.Fragment>
      <div className="searchbar">
      {/* {this.renderRedirect()} */}
      <form onSubmit={this.submitHandler} style={{ display: 'inline' }}>
        <InputGroup>
        <Input onClick={this.toggle} 
        onChange={this.searchHandler} 
        style={search} 
        placeholder="Search for pictures" 
        name="search"/>
        </InputGroup>
      </form>
      </div>
      <Collapse isOpen={this.state.collapse}>
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
                    <Input onChange={this.changeHandler} name="location" placeholder="Cape Cavernal" />
                </InputGroup>
              </form>
            </div>
            <div className="filter">
              <form onSubmit={this.handleSubmit} name="year_end">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">End Date</InputGroupAddon>
                    <Input onChange={this.changeHandler} name="location" placeholder="Cape Cavernal" />
                </InputGroup>
              </form>
            </div>
          </div>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(null, {searchResults})(Search));
