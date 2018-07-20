import barcodeReducer from '../'

describe('barcodeReducer', () => {
  it('should be a function', () => {
    expect(typeof barcodeReducer).toBe('function')
  })
  it('should return features as props', () => {
    expect(Object.keys(barcodeReducer())).toEqual([
      'food', 'finder'
    ])
  })
})