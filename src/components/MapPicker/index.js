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

    // Send the position and address back up to the parent component
    this.props.handleLocationChange(this.state);
  }

  render () {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div>
          <LocationPicker
            containerElement={ <div style={ {height: '100%', marginBottom: '2rem'} } /> }
            mapElement={ <div style={ {height: '275px'} } /> }
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    )
  }
}

export default MapPicker;
