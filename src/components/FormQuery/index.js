import React from 'react'
import { graphql } from 'react-apollo'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Form from '../Form';

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

const FormQuery = ({match}) => {
  const splitUrl = match.url.split('/');
  const getCodeIndex = arr => arr.indexOf('code') + 1;
  const getNameIndex = arr => arr.indexOf('name') + 1;
  const getCode = arr => arr[getCodeIndex(arr)];
  const getName = arr => arr[getNameIndex(arr)];
  return (
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
              />
            );
        }
      }
    </Query>
  );
};

export default FormQuery;
