import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import httprequest from 'superagent';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import MapPicker from '../MapPicker';
import './index.css';

const CLOUDINARY_UPLOAD_PRESET = 'usxouxpq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/open311/image/upload'
const CRM_URL = 'https://bloomington.in.gov/crm-test/tickets/view?ticket_id='

const POST_SERVICE_REQUEST = gql`
mutation PostRequest(
  $service_code: Int!
  $violation: String
  $propertyowner: String
  $propertytype: String
  $plagued: String
  $same: String
  $contact: String
  $violations: String
  $subcategory: String
  $reportee: String
  $other: String
  $timeofday: String
  $issue: String
  $complaintType: String
  $specificrequest: String
  $problem: String
  $type: String
  $involve: String
  $problem_type: String
  $workorder: String
  $applicationName: String
  $applicationUrl: String
  $lat: String
  $long: String
  $address_string: String
  $email: String
  $device_id: String
  $account_id: String
  $first_name: String
  $last_name: String
  $phone: String
  $description: String
  $media_url: String
) {
  postServiceRequest (
    service_code: $service_code
    violation: $violation
    propertyowner: $propertyowner
    propertytype: $propertytype
    plagued: $plagued
    same: $same
    contact: $contact
    violations: $violations
    subcategory: $subcategory
    reportee: $reportee
    other: $other
    timeofday: $timeofday
    issue: $issue
    complaintType: $complaintType
    specificrequest: $specificrequest
    problem: $problem
    type: $type
    involve: $involve
    problem_type: $problem_type
    workorder: $workorder
    applicationName: $applicationName
    applicationUrl: $applicationUrl
    lat: $lat
    long: $long
    address_string: $address_string
    email: $email
    device_id: $device_id
    account_id: $account_id
    first_name: $first_name
    last_name: $last_name
    phone: $phone
    description: $description
    media_url: $media_url
  ){
    service_request_id
    service_name
  }
}
`


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = this.initState(this.props.fields);

    this.getField = this.getField.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMediaChange = this.handleMediaChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
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

  handleLocationChange({address, position}) {
    const {lat, lng} = position;
    this.setState({
      address_string: address,
      lat,
      long: lng
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
              className='upload'
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
              <option value="">-----</option>
              {values.map(
                value => (
                  <option value={value.key} key={value.key}>{value.name}</option>
                )
              )}
            </select>
          </div>
        );
      case 'location':
        return (
          <div className="Location" key={code}>
          <label>
            {description}:
          </label>
            <MapPicker handleLocationChange={this.handleLocationChange}  />
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const { name, code, fields } = this.props;

    return (
      <Mutation mutation={POST_SERVICE_REQUEST} variables={{ 
        service_code: code,
        violation: this.state.violation,
        propertyowner: this.state.propertyowner,
        propertytype: this.state.propertytype,
        plagued: this.state.plagued,
        same: this.state.same,
        contact: this.state.contact,
        violations: this.state.violations,
        subcategory: this.state.subcategory,
        reportee: this.state.reportee,
        other: this.state.other,
        timeofday: this.state.timeofday,
        issue: this.state.issue,
        complaintType: this.state.complaintType,
        specificrequest: this.state.specificrequest,
        problem: this.state.problem,
        type: this.state.type,
        involve: this.state.involve,
        problem_type: this.state.problem_type,
        workorder: this.state.workorder,
        applicationName: this.state.applicationName,
        applicationUrl: this.state.applicationUrl,
        lat: this.state.lat,
        long: this.state.long,
        address_string: this.state.address_string,
        email: this.state.email,
        device_id: this.state.device_id,
        account_id: this.state.account_id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone: this.state.phone,
        description: this.state.description,
        media_url: this.state.media_url
      }}>
        {(postRequest, { data }) => data ? (
          <div>
            <h1 className="headline">Thank you for reporting this issue!</h1>
            <p>If you would like monitor the status of your request, please view it by clicking <a href={CRM_URL + data.postServiceRequest.service_request_id}>here</a></p>
            <Link to={{
              pathname: `/`,
              state: { }
            }}>
              <h2 className="backToTop">Report Another Issue</h2>
            </Link>
          </div>
          )
          :
          (
          <div className="Form">
            <h1 className="headline">Report {name}</h1>
            <form onSubmit={e => {
                e.preventDefault();
                postRequest();
            }}>
            {
              fields.map(field => this.getField(field))
            }
            <input type="submit" value="Submit" />
            </form>
          </div>
          ) 
        }
      </Mutation>
    );
  }
}

export default Form;
