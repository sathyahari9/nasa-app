import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/menu';
import Results from './components/results';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import LiveFeed from './livefeed';
import Home from './components/home';
// redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import './App.css';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router base path = "/">
          <Menu>
          </Menu>
          <Switch>
            <Route exact path = "/" component={Home}>
            </Route>
            <Route exact path = "/search" component={Results}>
            </Route>
            <Route exact path = "/livefeed" component={LiveFeed}>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;