import React from "react";
import { shallow } from "enzyme";
import {
  BarcodeFormContainer,
  mapStateToProps,
  mapDispatchToProps
} from "../container";
import BarcodeForm from "../presenter";

describe("BarcodeFormContainer", () => {
  it("should set state.barcode to the passed barcode when setBarcode", () => {
    const wrapper = shallow(<BarcodeFormContainer onSubmit={() => {}} />);
    const value = Math.random().toString();
    wrapper.instance().setBarcode(value);
    wrapper.update();
    expect(wrapper.state("barcode")).toBe(value);
  });
  it("should call e.preventDefault and props.onSubmit with the barcode", () => {
    const submitSpy = jest.fn();
    const event = { preventDefault: jest.fn() }
    const wrapper = shallow(<BarcodeFormContainer onSubmit={submitSpy} />);
    wrapper.instance().save(event)
    expect(event.preventDefault).toHaveBeenCalled()
    expect(submitSpy).toHaveBeenCalled()
  });
  it("should render a BarcodeForm", () => {
    const wrapper = shallow(<BarcodeFormContainer onSubmit={() => {}} />);
    expect(wrapper.find(BarcodeForm).exists()).toBe(true);
  });
  it("should call setBarcode when BarcodeForm.onChange", () => {
    const wrapper = shallow(<BarcodeFormContainer onSubmit={() => {}} />);
    const spy = jest.fn();
    wrapper.instance().setBarcode = spy;
    wrapper.find(BarcodeForm).simulate("change");
    expect(spy).toHaveBeenCalled();
  });
  it("should call save when BarcodeForm.save", () => {
    const wrapper = shallow(<BarcodeFormContainer onSubmit={() => {}} />);
    const spy = jest.fn();
    wrapper.instance().save = spy;
    wrapper.find(BarcodeForm).simulate("submit");
    expect(spy).toHaveBeenCalled();
  });
});


describe('mapStateToProps', () => {
  it('should return ownProps', () => {
    expect(mapStateToProps({a: 1}, { a: 4 })).toEqual({
      a: 4
    })
  })
})

describe('mapDispatchToProps', () => {
  it('should call dispatch when onSubmit is called', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onSubmit()
    expect(dispatch).toHaveBeenCalled()
  })
})