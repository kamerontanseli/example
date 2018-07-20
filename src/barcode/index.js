import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import BarcodeIndexPage from './components/BarcodeIndexPage'

const Barcode = () => (
  <Fragment>
    <Route exact path="/" component={BarcodeIndexPage} />
  </Fragment>
)

export default Barcode