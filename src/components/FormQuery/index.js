import React from 'react'
import { graphql } from 'react-apollo'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Form from '../Form';

import defaultFields from '../../data';

const formDefinitionQuery = (code) => gql`
{
  serviceDefinition(service_code: ${code}){
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
}`;

const FormQuery = ({match, location}) => {
  const splitUrl = match.url.split('/');
  const getCodeIndex = arr => arr.indexOf('code') + 1;
  const getNameIndex = arr => arr.indexOf('name') + 1;
  const getCode = arr => arr[getCodeIndex(arr)];
  const getName = arr => arr[getNameIndex(arr)];

  const fields = defaultFields;
  /*
    if the metadata is known to be false, don't run a query

    Note that if the user directly enters the url into the url bar,
    location.state.matadata will be undefined, so a query should be run. The
    only way to really know that metadata is and should be false, is for the user
    to enter the application through the entry page and click on a link.
  */
  return location && location.state && location.state.metadata && location.state.metadata === false ?
  (
    <Form
      code={getCode(splitUrl)}
      name={getName(splitUrl)}
      fields={fields}
    />
  )
  :
  (
    <Query
      query={formDefinitionQuery(getCode(splitUrl))}
    >
      {
        ({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error SAD</p>;
            return (
              <Form
                code={getCode(splitUrl)}
                name={getName(splitUrl)}
                fields={fields}
              />
            );
        }
      }
    </Query>
  );
};

export default FormQuery;
