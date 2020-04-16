import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

const COUNTRIES = gql`
{
    listCountries {
      name
      slug
    }
  }
`;

export default function Countries() {
    const { loading, error, data } = useQuery(COUNTRIES);

    if (loading) return <Fade in={loading} style={{transitionDelay: loading ? '800ms' : '0ms',}}
        unmountOnExit><CircularProgress /></Fade>;
    if (error) return <p>Error :(</p>;

    return (
        <Autocomplete
            id="country-list"
            options={data.listCountries}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField fullWidth {...params} label="Country" variant="outlined" />}
        />

    );
}