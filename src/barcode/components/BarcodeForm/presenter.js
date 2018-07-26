import React from "react";
import PropTypes from "prop-types";
import BarcodeScanner from '../BarcodeScanner'

const BarcodeForm = ({ onChange, onError }) => (
  <div className="container">
    <BarcodeScanner
      onResult={code => {
        if (code) {
          onChange(code);
        } else {
          onError()
        }
      }}
    />
  </div>
);

BarcodeForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

BarcodeForm.defaultProps = {};

export default BarcodeForm;
