import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { code, description } = this.props.field;

    return (
      <div className="Input">
        <label>
          {description}:
        </label>
        <input type="text" name={code} value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
};

export default Input;
