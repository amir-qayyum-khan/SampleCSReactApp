import React, { Component } from 'react';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import FetchData from './components/FetchData';
import store from './store';

export default class App extends Component {
  displayName = App.name

  render() {
    const { dispatch } = this.props;       
    return (
      <Provider store={store}>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/fetchdata' component={FetchData}  dispatch={dispatch} />
        </Layout>
      </Provider>
    );
  }
}
