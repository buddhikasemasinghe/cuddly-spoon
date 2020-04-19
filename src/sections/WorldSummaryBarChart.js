import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { useTheme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

import BarChart from '../components/BarChart';

const WORLD_SUMMARY_BY_TOTAL_CONFIRMED = gql`
{
    topCasesByStatus(status: TotalConfirmed, range: 20) {
      slug
      totalConfirmed
      totalDeaths
      totalRecovered
      newDeaths
      newConfirmed
    }
  }
`;


const WorldSummaryBarChart = () => {
    const theme = useTheme();
    const { loading, error, data } = useQuery(WORLD_SUMMARY_BY_TOTAL_CONFIRMED);

    if (loading) return <Fade in={loading} style={{ transitionDelay: loading ? '800ms' : '0ms', }}
        unmountOnExit><CircularProgress /></Fade>;
    if (error) return <p>Error :(</p>;
    return (
        <BarChart title="test" data={data} />
    );
}
export default  WorldSummaryBarChart