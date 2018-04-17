import React, { Component } from 'react';
import LocationPicker from 'react-location-picker';

/* Default position */
const defaultPosition = {
  lat: 39.1636,
  lng: -86.5257
};

class MapPicker extends Component {
  constructor (props) {
    super(props);

    this.state = {
      address: "Bloomington, Indiana",
      position: ""
    };

    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange ({ position, address }) {

    // Set new location
    this.setState({ position, address });
  }

  render () {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%'} } /> }
            mapElement={ <div style={ {height: '200px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    )
  }
}

export default MapPicker;