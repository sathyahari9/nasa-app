import React, { Component } from 'react';
import ResultCards from './resultcards';
import {Row} from 'reactstrap';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Filters from './filters';

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
  }
  findHref(href){
    var image = $.getJSON(href, "responseJSON");
    return image;
  }
  performSearch(){
    var cardsHolder = []
    console.log(this.props.results)
    if (this.props.results.length == 0){
      return 0;
    }
    const metadata = this.props.results.collection.metadata.total_hits
    const results = this.props.results.collection.items
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
      date_created= {resultImage.data[0].date_created}
    >
    </ResultCards>
    )
    })
    this.setState({results: cardsHolder})
  }
  render(){
    if (this.props.results.length == 0){
          return (
            <div>Search for something</div>
          );
    }
    return(
    <React.Fragment>
    <Row>
      {this.props.results.collection.items.map((result, key) => (
      <ResultCards 
        key= {result.data[0].nasa_id}
        id= {result.data[0].nasa_id}
        media_type= {result.data[0].media_type}
        image_href= {result.links[0].href}
        title= {result.data[0].title}
        center= {result.data[0].center}
        description= {result.data[0].description}
        date_created= {result.data[0].date_created}
      >
      </ResultCards>
      ))}
    </Row>
    </React.Fragment>
    );
  }
}
function mapStateToProps(state){
  console.log(state);
  return {
    results: state.results
  };
}
export default withRouter(connect(mapStateToProps, null)(Results));
