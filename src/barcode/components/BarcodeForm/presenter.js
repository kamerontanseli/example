import React from "react";
import PropTypes from "prop-types";
import BarcodeScanner from '../BarcodeScanner'

const BarcodeForm = ({ onChange, onError }) => (
  <div>
    <BarcodeScanner
      onResult={code => {
        if (code) {
          onChange(code);
        } else {
          onError()
        }
      }}
    />
    <div style={{ textAlign: 'center', marginBottom: 20 }}>
      <p>Or enter a barcode</p>
      <input className="form-control" type="text" onChange={e => onChange(e.currentTarget.value)} placeholder="barcode" />
    </div>
  </div>
);

BarcodeForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

BarcodeForm.defaultProps = {};

export default BarcodeForm;
