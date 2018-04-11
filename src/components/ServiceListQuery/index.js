import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import ServiceSelection from '../ServiceSelection';

/*
  reduce function below will result in data structure like this:
  {
    'Cleanup & Sanitation': [
      {
        service_code: 2,
        service_name: 'Excessive Growth'
        ...
      }
      ...
    ],
    ...
  }
*/

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


      const groupedByGroup = data.serviceList.reduce(
        (acc, cv) => {
          acc[cv.group] = acc[cv.group] || [];
          acc[cv.group].push(cv);
          return acc;
        }, {});

      return (
        <ServiceSelection
          groupedData={groupedByGroup}
        />
      );
    }}
  </Query>
);

export default ServiceListQuery;
