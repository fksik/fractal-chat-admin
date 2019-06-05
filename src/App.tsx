import * as React from 'react';
import './App.scss';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Login } from './Login/Login';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Home } from './Home/Home';
const customHistory = createBrowserHistory();

export class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router history={customHistory}>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/' component={Home} redirectTo='/login' routeCondition={true} />
        </Router>
      </div>
    );
  }
}

