import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchBarcode } from "../../ducks/finder";
import BarcodeForm from "./presenter";

export class BarcodeFormContainer extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };
  state = { barcode: "" };
  setBarcode = barcode => this.setState({ barcode });
  save = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.barcode);
  };
  render() {
    return (
      <BarcodeForm
        barcode={this.state.barcode}
        onChange={b => this.setBarcode(b)}
        onSubmit={e => this.save(e)}
      />
    );
  }
}

export const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: id => dispatch(fetchBarcode(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BarcodeFormContainer);
