import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import BarcodeIndexPage from "./components/BarcodeIndexPage";
import Navigation from "./components/Navigation";

const Barcode = () => (
  <Fragment>
    <Navigation />
    <Route exact path="/" component={BarcodeIndexPage} />
  </Fragment>
);

export default Barcode;
