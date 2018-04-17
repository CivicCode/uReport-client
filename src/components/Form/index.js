import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import httprequest from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'usxouxpq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/open311/image/upload'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = this.initState(this.props.fields);

    this.getField = this.getField.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMediaChange = this.handleMediaChange.bind(this);
    this.initState = this.initState.bind(this);
  }

  initState(fields) {
    return fields.reduce((acc, cv) => {
      acc[cv.code] = '';
      return acc;
    }, {});
  }

  handleSelectChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
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

  handleMediaChange(files) {
    var file = files[0];
    let upload = httprequest.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.log('Oh no, there was an error!  :(')
      }
      if (response.body.secure_url !== '') {
        this.setState({
          media_url: response.body.secure_url
        })
      }
    })
  }

  renderImages() {
    if (this.state.media_url) {
      return (
        <div>
          <p>Uploaded Image</p>
          <img src={this.state.media_url} alt="Uploaded Image" />
        </div>
      )
    } else {
      return (<p>No Images Uploaded</p>)
    }
  }

  getField(field) {
    const { code, datatype, description, values } = field;
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
              value={this.state[code]}
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
              value={this.state[code]}
              onChange={this.handleInputChange}
            />
          </div>
        );
      case 'media':
        return (
          <div className="Media" key={code}>
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.handleMediaChange}>
              {description}
            </Dropzone>
            {this.renderImages()}
          </div>
        );
      case 'singlevaluelist':
      case 'multivaluelist':
        return (
          <div className="Select" key={code}>
            <label>
              {description}:
            </label>
            <select name={code} value={this.state[code]} onChange={this.handleSelectChange}>
              {values.map(
                value => (
                  <option value={value.key} key={value.key}>{value.name}</option>
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
