import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-bootstrap/dist/react-bootstrap';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import City from './searchByCity/city';
import Ifsc from './searchByIfsc/ifsc';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import FixedDeposit from './fixedDepost/fd';

//when the following endpoints are called, there corresponding components are invoked. For example, if '/ifsc' is called, 'Ifsc' Component where we have written the logic for getting data by ifsc is called 
ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/ifsc" component={Ifsc} />
      <Route exact path="/city" component={City} />
      <Route exact path="/fd" component={FixedDeposit} />
    </Switch>
  </Router>
  ),
  
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
