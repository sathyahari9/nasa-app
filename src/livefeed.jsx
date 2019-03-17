import React, { Component } from 'react';
import $ from 'jquery';
import SimpleMap from './components/map';

const frameWeb = {
  border: "0 none transparent",
  margin: "20px",
  display: "none"
}
const top = {
  margin: "40px",
  textAlign: "center",
  fontFamily: "Avenir"
}
class LiveFeed extends Component{
  constructor(props){
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    }
  $.ajax({
    url: "http://api.open-notify.org/iss-now.json",
    success: (resultJson) => {
      this.setState({
        latitude: parseFloat(resultJson.iss_position.latitude),
        longitude: parseFloat(resultJson.iss_position.longitude)
      })
    }
  })
  }
  render(){
    const props = {
      center: {
      lat: this.state.latitude, 
      lng: this.state.longitude
      },
      zoom: 2
    }
    return(
      <div>
        <h1 style={top}>
          Current position tracking of the ISS
        </h1>
        <SimpleMap 
        center={props.center}
        zoom={props.zoom}>
        </SimpleMap>
        <iframe width="480" height="270" src="https://www.ustream.tv/embed/9408562?html5ui" 
        scrolling="no" allowfullscreen webkitallowfullscreen 
        frameborder="0" style={frameWeb} align="center">
        </iframe>
      </div>
    )
  }
}

export default LiveFeed;