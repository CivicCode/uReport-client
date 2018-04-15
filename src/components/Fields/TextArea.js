import React, { Component } from 'react';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { code, description } = this.props.field;
    return (
      <div className="TextArea">
        <label>
          {description}:
        </label>
        <textarea
          type="text"
          name={code}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
};

export default TextArea;
