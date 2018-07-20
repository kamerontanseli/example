import React from "react";
import { shallow } from "enzyme";
import FoodInfo, { IngredientDescription } from "../presenter";

describe("IngredientDescription", () => {
  it("should render a list of ingredients with allergies highlighted in bold", () => {
    const data = [
      "Fromage Frais ",
      "(",
      "(",
      null,
      null,
      "from _Milk_)",
      ",",
      null,
      null,
      null,
      " Sugar",
      ",",
      null,
      null,
      null,
      " Cream ",
      "(",
      "(",
      null,
      null,
      "from _Milk_)",
      ",",
      null,
      null,
      null,
      " Strawberry Puree 2.5%",
      ",",
      null,
      null,
      null,
      " Modified Maize Starch",
      ",",
      null,
      null,
      null,
      " _Milk_ Mineral Concentrates",
      ",",
      null,
      null,
      null,
      " Thickeners ",
      "(",
      "(",
      null,
      null,
      "Guar Gum",
      ",",
      null,
      null,
      null,
      " Locust Bean Gum",
      ",",
      null,
      null,
      null,
      " Xanthan Gum)",
      ",",
      null,
      null,
      null,
      " Acidity Regulators ",
      "(",
      "(",
      null,
      null,
      "Citric Acid",
      ",",
      null,
      null,
      null,
      " Sodium Citrate)",
      ",",
      null,
      null,
      null,
      " Flavourings",
      ",",
      null,
      null,
      null,
      " Colour ",
      "(",
      "(",
      null,
      null,
      "Carmine",
      ",",
      null,
      null,
      null,
      " Plain Caramel)",
      ",",
      null,
      null,
      null,
      " Vitamin D"
    ];

    const wrapper = shallow(
      <div>
        <IngredientDescription text={data} />
      </div>
    );
    expect(wrapper.html()).toBe(
      "<div>Fromage Frais  (from <strong>Milk) </strong>,  Sugar ,  Cream  (from <strong>Milk) </strong>,  Strawberry Puree 2.5% ,  Modified Maize Starch ,  <strong>Milk </strong>Mineral Concentrates ,  Thickeners  (Guar Gum ,  Locust Bean Gum ,  Xanthan Gum) ,  Acidity Regulators  (Citric Acid ,  Sodium Citrate) ,  Flavourings ,  Colour  (Carmine ,  Plain Caramel) ,  Vitamin D </div>"
    );
  });
});

describe("FoodInfo", () => {
  it('should render [data-testid="loader"] when props.loading', () => {
    const wrapper = shallow(<FoodInfo loading />);
    expect(wrapper.find('[data-testid="loader"]').exists()).toBe(true);
  });
  it('should render [data-testid="error"] when props.error', () => {
    const wrapper = shallow(<FoodInfo error />);
    expect(wrapper.find('[data-testid="error"]').exists()).toBe(true);
  });
  it('should render [data-testid="placeholder"] by default', () => {
    const wrapper = shallow(<FoodInfo />);
    expect(wrapper.find('[data-testid="placeholder"]').exists()).toBe(true);
  });
});
