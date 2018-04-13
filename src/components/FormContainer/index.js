import React from 'react'
import { graphql } from 'react-apollo'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import './index.css';

const Form = ({data, match}) => (
  <Query
    query={gql`
      {
        serviceList {
          service_code
          service_name
          description
          metadata
          type
          keywords
          group
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;


      const groupedByGroup = data.serviceList.reduce(
        (acc, cv) => {
          acc[cv.group] = acc[cv.group] || [];
          acc[cv.group].push(cv);
          return acc;
        }, {});

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