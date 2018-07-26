import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchBarcode, barcodeFinderError } from "../../ducks/finder";
import BarcodeForm from "./presenter";

export class BarcodeFormContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onError: PropTypes.func.isRequired
  };
  render() {
    return (
      <BarcodeForm
        onError={this.props.onError}
        onChange={b => this.props.onSubmit(b)}
      />
    );
  }
}

export const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: id => dispatch(fetchBarcode(id)),
  onError: () => dispatch(barcodeFinderError())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarcodeFormContainer);
