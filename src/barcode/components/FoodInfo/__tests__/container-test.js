import React from "react";
import { shallow } from 'enzyme'
import { mapStateToProps, mapDispatchToProps } from "../container";

describe('mapStateToProps', () => {
  it('should return state.barcode.finder and select a food using finder.barcode', () => {
    expect(mapStateToProps({
      barcode: {
        finder: {
          loading: true,
          error: false,
          barcode: '123'
        },
        food: {
          '123': { yum: true }
        }
      }
    })).toEqual({
      loading: true,
      error: false,
      barcode: '123',
      food: { yum: true }
    })
  })
})

describe('mapDispatchToProps', () => {
  it('should return an empty object', () => {
    expect(mapDispatchToProps()).toEqual({})
  })
})
