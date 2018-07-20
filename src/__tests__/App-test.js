import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import Barcode from "../barcode";

describe("App", () => {
  it("should render Barcode when the route is /", () => {
    const oldRouter = App.Router;
    App.Router = props => <MemoryRouter {...props} initialEntries={["/"]} />;
    const wrapper = mount(<App />);
    expect(wrapper.find(Barcode).exists()).toBe(true);
    App.Router = oldRouter;
  });
});
