import React from "react";
import { shallow } from "enzyme";
import BarcodeForm from "../presenter";

describe("BarcodeForm", () => {
  it('should call submit when [data-testid="form"] is submitted', () => {
    const spy = jest.fn();
    const wrapper = shallow(<BarcodeForm onChange={() => {}} onSubmit={spy} />);
    wrapper.find('[data-testid="form"]').simulate("submit");
    expect(spy).toHaveBeenCalled();
  });
  it('should call onChange when [data-testid="input"] is changed', () => {
    const spy = jest.fn(v => expect(v).toBe('hello'));
    const wrapper = shallow(<BarcodeForm onChange={spy} onSubmit={() => {}} />);
    wrapper.find('[data-testid="input"]').simulate("change", {
      currentTarget: {
        value: 'hello'
      }
    });
    expect(spy).toHaveBeenCalled();
  });
});
