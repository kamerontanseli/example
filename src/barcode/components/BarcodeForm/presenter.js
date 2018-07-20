import "./BarcodeForm.css";
import React from "react";
import PropTypes from "prop-types";

const BarcodeForm = ({ barcode, onChange, onSubmit }) => (
  <form
    data-testid="form"
    action=""
    className="BarcodeForm"
    onSubmit={onSubmit}
  >
    <div className="container">
      <input
        data-testid="input"
        required
        placeholder="Search for a barcode (e.g: 0737628064502)"
        type="text"
        className="BarcodeForm-input"
        value={barcode}
        onChange={e => onChange(e.currentTarget.value)}
      />
      <button className="BarcodeForm-button" type="submit">
        Find
      </button>
    </div>
  </form>
);

BarcodeForm.propTypes = {
  barcode: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func
};

BarcodeForm.defaultProps = {
  barcode: ""
};

export default BarcodeForm;
