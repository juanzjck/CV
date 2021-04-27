import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import { Provider } from 'react-redux';
import { store } from './store';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import {  KeystoneProvider } from '@keystonejs/apollo-helpers';
import Modal from 'react-modal';
Modal.setAppElement('#modal')


ReactDOM.render(

    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <KeystoneProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </KeystoneProvider>
      </ApolloHooksProvider>
    </ApolloProvider>
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
