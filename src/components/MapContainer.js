import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  width: '450px',
  height: '350px',
  overflowX: 'hidden',
  overflowY: 'hidden'
}

const containerStyle = {
  width: '450px !important',
  height: '350px',
  overflowX: 'hidden',
  overflowY: 'hidden'
}

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <Map
          mapContainerStyle={containerStyle}
          resetBoundsOnResize = {true}
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 54.6565,
              lng: -2.544
            }
          }
        />
        </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBzjnkUph4N3gi3v1w5vN3gOB6FtJY8z-I'
})(MapContainer)