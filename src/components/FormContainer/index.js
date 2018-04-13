import React from 'react'
import { graphql } from 'react-apollo'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './index.css';

const Form = ({match, location}) => (
  <Query
    query={gql`
      {
        serviceDefinition(service_code: ${location.state.service_code}){
          variable,
          code,
          datatype,
          required,
          datatype_description,
          values {
            key,
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      console.log(data);
      return (

        <div className="Form">
          <h1 className="headline">Report {(match.url).replace('/form/', '')}</h1>
          <form action="#">
            <label>
              First Name:
              <input type="text" name="firstName" placeholder="First Name" />
            </label>
            <br />
            <label>
              Last Name:
              <input type="text" name="lastName" placeholder="Last Name" />
            </label>
            <br />
            <label>
              Email:
              <input type="text" name="email" placeholder="jane@example.com" />
            </label>
            <br />
            <label>
              Pick the reason for your report:
              <select>
                <option value="happy">happy</option>
                <option value="sad">sad</option>
                <option value="99problems">99problems</option>
                <option value="justBecause">just because</option>
              </select>
            </label>
          </form>
        </div>
      );
    }}
  </Query>
);

export default Form;
