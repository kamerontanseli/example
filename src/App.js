import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import Barcode from './barcode'

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
          <Route exact path="/*" component={Barcode} />
        </App.Router>
      </Provider>
    );
  }
}

export default App;
