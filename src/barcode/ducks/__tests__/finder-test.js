import finderReducer, {
  BARCODE_FINDER_REQUEST,
  BARCODE_FINDER_RECEIVE,
  BARCODE_FINDER_ERROR,
  INITIAL_STATE,
  barcodeFinderRequest,
  barcodeFinderReceive,
  barcodeFinderError,
  fetchBarcode
} from "../finder";
import { BARCODE_FOOD_ADD_FOOD } from "../food";

describe("barcodeFinderRequest", () => {
  it("should return with type BARCODE_FINDER_REQUEST", () => {
    expect(barcodeFinderRequest()).toEqual({
      type: BARCODE_FINDER_REQUEST,
      payload: {}
    });
  });
});

describe("barcodeFinderReceive", () => {
  it("should return with type BARCODE_FINDER_RECEIVE", () => {
    const id = Math.random();
    expect(barcodeFinderReceive(id)).toEqual({
      type: BARCODE_FINDER_RECEIVE,
      payload: { id }
    });
  });
});

describe("barcodeFinderError", () => {
  it("should return with type BARCODE_FINDER_ERROR", () => {
    expect(barcodeFinderError()).toEqual({
      type: BARCODE_FINDER_ERROR,
      payload: {}
    });
  });
});

describe("fetchBarcode", () => {
  it("should only call dispatch with BARCODE_FINDER_RECEIVE if id is in food", async () => {
    const getState = jest.fn(() => ({
      barcode: {
        food: {
          "123": { value: true }
        }
      }
    }));
    const dispatch = jest.fn(t =>
      expect([BARCODE_FINDER_RECEIVE]).toContain(t.type)
    );
    await fetchBarcode("123")(dispatch, getState);
    expect(getState).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
  });
  it("should only call dispatch with BARCODE_FINDER_REQUEST and then BARCODE_FINDER_ERROR if the response is not valid", async () => {
    const getState = jest.fn(() => ({
      barcode: {
        food: {}
      }
    }));
    const fetchSpy = jest.spyOn(window, "fetch").mockImplementation(
      () =>
        new Promise(r =>
          r({
            ok: true,
            json: () => ({
              status: 0,
              product: {
                ingredients: []
              }
            })
          })
        )
    );
    const dispatch = jest.fn(t =>
      expect([BARCODE_FINDER_REQUEST, BARCODE_FINDER_ERROR]).toContain(t.type)
    );
    await fetchBarcode("990")(dispatch, getState);
    expect(getState).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
    expect(fetchSpy).toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
  it("should call dispatch with BARCODE_FINDER_REQUEST, BARCODE_FOOD_ADD_FOOD, BARCODE_FINDER_RECEIVE when the response is valid", async () => {
    const getState = jest.fn(() => ({
      barcode: {
        food: {}
      }
    }));
    const fetchSpy = jest.spyOn(window, "fetch").mockImplementation(
      () =>
        new Promise(r =>
          r({
            ok: true,
            json: () => ({
              status: 1,
              product: {
                ingredients: [{}, {}]
              }
            })
          })
        )
    );
    const dispatch = jest.fn(t =>
      expect([
        BARCODE_FINDER_REQUEST,
        BARCODE_FOOD_ADD_FOOD,
        BARCODE_FINDER_RECEIVE
      ]).toContain(t.type)
    );
    await fetchBarcode("990")(dispatch, getState);
    expect(getState).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalled();
    expect(fetchSpy).toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});

describe("finderReducer", () => {
  it("should return loading as true and error as false when BARCODE_FINDER_REQUEST", () => {
    expect(finderReducer({}, { type: BARCODE_FINDER_REQUEST })).toEqual({
      loading: true,
      error: false
    });
  });
  it("should return loading as false and error as false and barcode as payload.id when BARCODE_FINDER_RECEIVE", () => {
    expect(
      finderReducer({}, { type: BARCODE_FINDER_RECEIVE, payload: { id: 123 } })
    ).toEqual({
      loading: false,
      error: false,
      barcode: 123
    });
  });
  it("should return loading as false and error as true when BARCODE_FINDER_ERROR", () => {
    expect(finderReducer({}, { type: BARCODE_FINDER_ERROR })).toEqual({
      loading: false,
      error: true
    });
  });
  it("should return INITIAL_STATE by default", () => {
    expect(finderReducer()).toEqual(INITIAL_STATE);
  });
});
