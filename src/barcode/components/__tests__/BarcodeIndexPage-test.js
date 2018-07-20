import React from "react";
import { shallow } from 'enzyme'
import BarcodeForm from "../BarcodeForm";
import FoodInfo from "../FoodInfo";
import BarcodeIndexPage from '../BarcodeIndexPage'

describe('BarcodeIndexPage', () => {
  it('should render BarcodeForm and FoodInfo', () => {
    const wrapper = shallow(<BarcodeIndexPage />)
    expect(wrapper.find(BarcodeForm).exists()).toBe(true)
    expect(wrapper.find(FoodInfo).exists()).toBe(true)
  })
})
