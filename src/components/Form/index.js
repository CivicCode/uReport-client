import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getField = this.getField.bind(this);
    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDropDownChange(event) {
    this.setState({value: event.target.value});
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  getField(field) {
    const { code, datatype, description, values, datatype_description } = field;
    switch (datatype) {
      case 'string':
      case 'number':
      case 'datetime':
        return (
          <div className="Input" key={code}>
            <label>
              {description}:
            </label>
            <input
              type="text"
              name={code}
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </div>
        );
      case 'text':
        return (
          <div className="TextArea" key={code}>
            <label>
              {description}:
            </label>
            <textarea
              type="text"
              name={code}
              value={this.state.value}
              onChange={this.handleInputChange}
            />
          </div>
        );
      case 'media':
        return (
          <div className="Media" key={code}>
            <label>
              {description}:
            </label>
            <input type="file" name={code} />
          </div>
        );
      case 'singlevaluelist':
      case 'multivaluelist':
        return (
          <div className="DropDown" key={code}>
            <label>
              {description}:
            </label>
            <select value={this.state.value} onChange={this.handleDropDownChange}>
              {values.map(
                value => (
                  <option value={value.key}>{value.name}</option>
                )
              )}
            </select>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const { name, code, fields } = this.props;

    return (
      <div className="Form">
        <h1 className="headline">Report {name}</h1>
        <form onSubmit={this.handleSubmit}>
        {
          fields.map(field => this.getField(field))
        }
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
