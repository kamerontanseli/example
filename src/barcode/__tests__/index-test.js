import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import store from "../../app/store";
import Barcode from "../";
import BarcodeIndexPage from "../components/BarcodeIndexPage";

describe("Barcode", () => {
  it("should render BarcodeIndexPage when the route is /", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Barcode />
        </MemoryRouter>
      </Provider>
    );
    expect(wrapper.find(BarcodeIndexPage).exists()).toBe(true);
  });
});
