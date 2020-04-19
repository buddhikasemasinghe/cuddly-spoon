import React from 'react';
import { render } from 'react-dom';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';


import TopPanel from '../pages/TopPanel';
import Dashboard from '../pages/Dashboard';
import { Router, Link } from "@reach/router"
import SignInSide from '../pages/SignInSlidePage';
import WorldSummaryPage from '../pages/WorldSummaryPage';
import CountryProfile from '../pages/CountryProfile';

const NotFound = () => (
    <div>Sorry, nothing here.</div>
);



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

const Navigation = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TopPanel />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Router>
                    <CountryProfile path="/country" />
                    <Dashboard path="/" />
                    <SignInSide path="signin" />
                    <WorldSummaryPage path="world" />
                    <NotFound default />
                </Router>
            </main>
        </div>
    )
};
export default Navigation;