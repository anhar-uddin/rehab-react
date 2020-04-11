import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import MetEmployees from "./MetEmployees";


import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import employees from "./redux/reducer";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(employees, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route path="/met-employees" render={props => <MetEmployees {...props} />} />
        <Route path="/employees/:id" render={props => <App {...props} />} />
        <Redirect from="/" to="/employees/1" />
      </Switch>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
