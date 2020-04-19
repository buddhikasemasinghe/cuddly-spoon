import React from 'react';
import { render } from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Navigation from './router/Navigation'

const client = new ApolloClient({
  uri: 'https://covid19-modelizer-proxy.azurewebsites.net/',
 // uri: 'http://localhost:8080',
  link: new HttpLink(),
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloProvider client={client}>
    <Navigation />
  </ApolloProvider>
);

render(<Root />, document.getElementById('root'));