import React, { Component } from 'react';
import {Row,Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button, Collapse} from 'reactstrap';
import {connect} from 'react-redux';
import {searchResults} from "../actions";
import { BrowserRouter as Router, Redirect, browserHistory, Route, Link, NavLink, Switch, withRouter } from 'react-router';

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
      year_start: "1900",
      year_end: "2019",
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
    console.log(event.target.value)
    if (event.target.name === "location")
    {
      this.setState({location: event.target.value})
      console.log(event.target.value)
    }
    console.log(event.target.value)
    if (event.target.name === "year_end")
    {
      this.setState({year_end: event.target.value})
      console.log(event.target.value)
    }
    else if (event.target.name === "year_start")
    {
      this.setState({year_start: event.target.value})
      console.log(event.target.value)
    }
  }
  handleSubmit(event){
    this.searchOnMedium();
    this.props.history.push("/search");    
    event.preventDefault();
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='./search' />
    }
  }
  searchHandler(event){
    this.setState({
      value: event.target.value,
    });
  }
  submitHandler(event){
    this.searchOnMedium();
    this.props.history.push("/search");
    event.preventDefault();
  }
  searchOnMedium = () => {
  let URL = "https://images-api.nasa.gov/search?media_type=image&q="+ this.state.value + "&location=" + this.state.location + "&year_end=" + this.state.year_end + "&year_start=" + this.state.year_start;
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
      {this.renderRedirect()}
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
                    <Input onChange={this.changeHandler} name="location" placeholder="Cape Cavernal" />
                </InputGroup>
              </form>
            </div>
            <div className="filter">
              <form onSubmit={this.handleSubmit} name="year_start">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Start Date</InputGroupAddon>
                    <Input onChange={this.changeHandler} name="year_start" placeholder="2000" />
                </InputGroup>
              </form>
            </div>
            <div className="filter">
              <form onSubmit={this.handleSubmit} name="year_end">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">End Date</InputGroupAddon>
                    <Input onChange={this.changeHandler} name="year_end" placeholder="2022" />
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
