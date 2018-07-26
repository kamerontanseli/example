import "./BarcodeScanner.css";
import React, { Component } from "react";
import Quagga from "quagga";
import CameraIcon from '../../../app/shared/assets/images/camera-icon.png'

class BarcodeScanner extends Component {
  setFile = e => {
    if (e.target.files && e.target.files.length) {
      Quagga.decodeSingle(
        {
          decoder: {
            readers: [
              "code_128_reader",
              "ean_reader",
              "ean_8_reader",
              "code_39_reader",
              "code_39_vin_reader",
              "codabar_reader",
              "upc_reader",
              "upc_e_reader",
              "i2of5_reader",
              "2of5_reader",
              "code_93_reader"
            ]
          },
          locate: true,
          src: URL.createObjectURL(e.target.files[0])
        },
        result => {
          if (result && result.codeResult) {
            this.props.onResult(result.codeResult.code);
          } else {
            this.props.onResult(null);
          }
        }
      );
    }
  };
  render() {
    return (
      <label style={{
        backgroundImage: `url(${CameraIcon})`
      }} htmlFor="file" className="BarcodeScanner-label">
        <input
          className="BarcodeScanner-input"
          id="file"
          type="file"
          onChange={e => this.setFile(e)}
        />
      </label>
    );
  }
}

export default BarcodeScanner;
