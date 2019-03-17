import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Marker extends Component{
  render(){
    return(
      <div class="circles">
      <div class="circle1">
      </div>
      <div class="circle2">
      </div>
      </div>
    );
  }
}

class SimpleMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    }
    this.setState({
    latitude: this.props.lat,
    longitude: this.props.lng
    })
  }
  // static defaultProps = {
  //   center: {
  //     lat: 0,
  //     lng: 0
  //   },
  //   zoom: 1
  // };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div class="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBsFrpe1_qnPdY__9PC8PciY-Ax5xdEjQ8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker
          lat={this.props.center.lat}
          lng={this.props.center.lng}/>
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;