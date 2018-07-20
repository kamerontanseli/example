import React from "react";
import { shallow } from "enzyme";
import FoodInfo from "../presenter";

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
  it('should render a data-testid="ingredient"] for every ingredient in food.ingredients if ingredient has no rank', () => {
    const food = {
      product_name: "Noodles",
      selected_images: {
        front: {
          display: {
            en: "/img.png"
          }
        }
      },
      ingredients: [
        { id: 1, text: "A", rank: 1 },
        { id: 2, text: "B", rank: 1 },
        { id: 3, text: "C" },
        { id: 4, text: "D" },
        { id: 5, text: "E", rank: 1 }
      ]
    };
    const wrapper = shallow(<FoodInfo food={food} />);
    wrapper.find('[data-test="ingredient"]').forEach(ingredient => {
      expect([3, 4]).toContain(ingredient.prop("key"));
    });
  });
});
