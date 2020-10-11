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


ReactDOM.render((
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/ifsc" component={Ifsc} />
      <Route exact path="/city" component={City} />
      <Route exact path="/fd" component={FixedDeposit} />
    </Switch>
  </Router>
  // <Router history = {browserHistory}>
  //     <Route path = "/" component = {App}>
  //        {/* <IndexRoute component = {Home} /> */}
  //        <Route path="city" component={ City } />
  //        <Route path = "ifsc" component = {Ifsc} />
  //     </Route>
  //  </Router>
  // {/* <React.StrictMode>
  //   <App />
  // </React.StrictMode> */}
  ),
  
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
