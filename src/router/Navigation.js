import React from 'react';
import { render } from 'react-dom';

import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import { Router, Link } from "@reach/router"
import SignInSide from '../pages/SignInSlidePage';

const NotFound = () => (
    <div>Sorry, nothing here.</div>
);

const Navigation = () => <>
    <Router>
        <HomePage path="/home" />
        <Dashboard path="/" />
        <SignInSide path="signin" />
        <NotFound default />
    </Router>
</>

export default Navigation;