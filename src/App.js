import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import routes from "./app/routes";

/**
 * Top Level component which instantiates the provider and the router.
 *
 * @class
 * @extends React#Component
 * @example
 * <App />
 */
class App extends Component {
  static Router = Router;
  render() {
    return (
      <Provider store={store}>
        <App.Router>
          <Fragment>
            {routes.map(route => <Route key={route.path} {...route} />)}
          </Fragment>
        </App.Router>
      </Provider>
    );
  }
}

export default App;
