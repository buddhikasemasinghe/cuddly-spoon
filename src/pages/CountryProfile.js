import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Countries from '../components/Countries';
import RaceChart from '../components/RaceChart';


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
        height: 540,
    },
}));

const CountryProfile = () => {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={1}>
                {/* Chart */}
                <Grid item xs={12} md={9} lg={10}>
                    <Paper className={fixedHeightPaper}>
                     <RaceChart />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={2}>
                    <Paper className={fixedHeightPaper}>
                     <Countries />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};
export default CountryProfile;