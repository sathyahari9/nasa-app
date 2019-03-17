import React, { Component } from 'react';
import ResultCards from './resultcards';
import {Row} from 'reactstrap';
import $ from 'jquery';

const pad = {
  padding: "2em",
  fontFamily: "Avenir",
}
const head = {
  padding: "1.5em 2em 0em 2em",
  fontFamily: "Avenir",
}
const head2 = {
  marginTop: "15px",
  fontFamily: "Avenir",
}
class Results extends Component{
  constructor(props){
    super(props);
    this.state = {
      results: [],
      meta: "",
      search: ""
    }
    this.performSearch("moon");
  }  
  findHref(href){
    var image = $.getJSON(href, "responseJSON");
    return image;
  }
  performSearch(searchTerm){
    const urlString = "https://images-api.nasa.gov/search?media_type=image&q=" + searchTerm;
    var cardsHolder = []
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const metadata = searchResults.collection.metadata.total_hits
        const results = searchResults.collection.items
        const search = searchTerm
        results.forEach((resultImage) => {
          console.log(resultImage.links[0].href)
          cardsHolder.push(
            <ResultCards 
            key= {resultImage.data[0].nasa_id}
            id= {resultImage.data[0].nasa_id} 
            media_type= {resultImage.data[0].media_type} 
            image_href= {resultImage.links[0].href}
            title= {resultImage.data[0].title}
            center= {resultImage.data[0].center}
            description= {resultImage.data[0].description}
            date_created= {resultImage.data[0].date_created}>
            </ResultCards>
          )
        })
        this.setState({results: cardsHolder, meta: metadata, search: search})
      },
      error: (xhr, status, err) => {
        console.error("Failed")
      }
    })
  }
  render(){
    return(
      <React.Fragment>
        <Row>
        <h2 style={head}>
        Results for "{this.state.search}"<br/>
        <h5 style={head2}>
        Total hits: {this.state.meta}
        </h5>
        </h2>
        </Row>
        <Row style={pad}>
          {this.state.results}
        </Row>
      </React.Fragment>
    );
  }
}
export default Results;