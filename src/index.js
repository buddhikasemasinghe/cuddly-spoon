import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://covid19-modelizer-proxy.azurewebsites.net/',
});

const Render = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(<Render />, document.getElementById('root'));