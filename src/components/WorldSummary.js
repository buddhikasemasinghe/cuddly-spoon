import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

import Title from './Title';

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

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function WorldSummary() {
    const classes = useStyles();
    const { loading, error, data } = useQuery(WORLD_SUMMARY_BY_TOTAL_CONFIRMED);

    if (loading) return <Fade in={loading} style={{ transitionDelay: loading ? '800ms' : '0ms', }}
        unmountOnExit><CircularProgress /></Fade>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <Title>World Summary</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Country</TableCell>
                        <TableCell>Total Confirmed</TableCell>
                        <TableCell>Total Deaths</TableCell>
                        <TableCell>Total Recovered</TableCell>
                        <TableCell>New Confirmed</TableCell>
                        <TableCell>New Deaths</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.topCasesByStatus.map((row) => (
                        <TableRow key={row.slug}>
                            <TableCell>{row.slug}</TableCell>
                            <TableCell>{row.totalConfirmed}</TableCell>
                            <TableCell>{row.totalDeaths}</TableCell>
                            <TableCell>{row.totalRecovered}</TableCell>
                            <TableCell>{row.newConfirmed}</TableCell>
                            <TableCell>{row.newDeaths}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more results</Link>
            </div>
        </>
    );
}