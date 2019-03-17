import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Results from './components/results';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import LiveFeed from './livefeed';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu>
        </Menu>
        <Router base path = "/">
          <Switch>
            <Route exact path = "/search" component={Results}>
            </Route>
            <Route exact path = "/livefeed" component={LiveFeed}>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;