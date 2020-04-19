import React from 'react';
import clsx from 'clsx';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

import Chart from '../components/LineChart';
import Copyright from '../components/Copyright';
import BarChart from '../components/BarChart';

const TOP_10_BY_TOTAL_CONFIRMED = gql`
{
    listCountries {
        isoCode
        slug
        name
    }

    topCasesByStatus(status: TotalConfirmed, range: 10) {
      slug
      countryName
      totalConfirmed
      totalDeaths
      totalRecovered
      newDeaths
      newConfirmed
    }
  }
`;

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 400,
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const { loading, error, data } = useQuery(TOP_10_BY_TOTAL_CONFIRMED);

    if (loading) return <Fade in={loading} style={{ transitionDelay: loading ? '800ms' : '0ms', }}
        unmountOnExit><CircularProgress /></Fade>;
    if (error) return <p>Error :(</p>;
    const countries = data.listCountries;   

    const barChartProperties = {
        margin: { top: 25, right: 5, bottom: 50, left: 35 },
        indexBy: "countryName",
        keys: ['totalConfirmed', 'totalDeaths', 'totalRecovered'],
        axisBottom: {
            format: d => `${countries.find(a => a.name === d).isoCode}`
        },
        axisLeft: {
            format: ".2s"
        }
    };

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={8}>
                    <Paper className={fixedHeightPaper}>
                        <BarChart title="Top 10" data={data.topCasesByStatus} properties={barChartProperties} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        <Chart />
                    </Paper>
                </Grid>
            </Grid>
            <Box pt={4}>
                <Copyright />
            </Box>
        </Container>
    )
};
export default Dashboard;