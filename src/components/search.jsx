import React, { Component } from 'react';
import {Row,Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
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
    }
    this.searchOnMedium()
    this.searchHandler = this.searchHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
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
  let URL = "https://images-api.nasa.gov/search?media_type=image&q=" + this.state.value;
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
      <div className="searchbar">
      {/* {this.renderRedirect()} */}
      <form onSubmit={this.submitHandler}>
        <InputGroup>
        <Input 
        onChange={this.searchHandler} 
        style={search} 
        placeholder="Search for pictures" 
        name="search"/>
        </InputGroup>
      </form>
      </div>
    );
  }
}

export default withRouter(connect(null, {searchResults})(Search));
