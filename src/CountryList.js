import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const COUNTRIES = gql`
{
    listCountries {
      name
      slug
    }
  }
`;

export default function CountryList() {
  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.listCountries.map(({ name, slug }) => (
    <ul>
    <li key={slug}>
        {name}: {slug}
    </li>
    </ul>

  ));
}