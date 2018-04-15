import React, { Component } from 'react';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { code, description, values } = this.props.field;

    return (
      <div className="DropDown">
        <label>
          {description}:
        </label>
        <select value={this.state.value} onChange={this.handleChange}>
          {values.map(
            value => (
              <option value={value.key}>{value.name}</option>
            )
          )}
        </select>
      </div>
    );
  }
};

export default DropDown;
