import React, { Component } from 'react';
import {Row,Col, InputGroup, InputGroupAddon, InputGroupText, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchResults} from "../actions";

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
      redirect: false
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  setRedirect(){
    this.setState({
      redirect: true
    })
  }
  searchHandler(event){
    console.log(event.target.value)
    this.setState({
      value: event.target.value,
    })
  }
  submitHandler(event){
    this.setRedirect()
    event.preventDefault()
  }
  renderRedirect(){
    if (this.state.redirect) {
      return <Redirect to='./search' />
    }
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
        this.props.searchResults(data.items);
      })
    }).catch((error) => console.log(error));
  }

  render(){
    return(
      <div className="searchbar">
      <form onSubmit={this.submitHandler}>
        <InputGroup>
        {this.renderRedirect}
        <Input onChange={this.searchHandler} style={search} placeholder="Search for pictures" name="search"/>
        </InputGroup>
      </form>
      </div>
    );
  }
}

export default connect(null, {searchResults})(Search);
