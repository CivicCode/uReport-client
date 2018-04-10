import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ServiceListQuery = () => (
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

      return data.serviceList.map(({ service_name }) => (
        <div key={service_name}>
          {service_name}
        </div>
      ));
    }}
  </Query>
);

export default ServiceListQuery;
