import React from 'react';
import { render } from 'react-dom';
import './index.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import HomePage from './pages/HomePage';

const client = new ApolloClient({
  uri: 'https://covid19-modelizer-proxy.azurewebsites.net/',
});

const Root = () => (
  <ApolloProvider client={client}>
    <HomePage />
  </ApolloProvider>
);

render(<Root />, document.getElementById('root'));