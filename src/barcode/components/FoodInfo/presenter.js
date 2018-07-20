import "./FoodInfo.css";
import React from "react";
import PropTypes from "prop-types";
import Loader from "../../../app/shared/ui/Loader";

const FoodInfo = ({ loading, error, food }) => {
  if (loading) {
    return (
      <div className="container">
        <div className="FoodInfo">
          <Loader data-testid="loader" />
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div className="container">
        <div className="FoodInfo">
          <h2 data-testid="error">Product was not found</h2>
        </div>
      </div>
    );
  } else if (!food) {
    return (
      <div className="container">
        <div className="FoodInfo">
          <h2 data-testid="placeholder">Enter a barcode above to find food</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="FoodInfo">
        <h3 className="FoodInfo-title">{food.product_name}</h3>
        <img
          className="FoodInfo-image"
          src={food.selected_images.front.display.en}
          alt={food.product_name}
        />
        <ul className="FoodInfo-list">
          {food.ingredients
            .filter(ingredient => !ingredient.rank)
            .map(ingredient => (
              <li
                data-testid="ingredient"
                className="FoodInfo-listItem"
                key={ingredient.id}
              >
                {ingredient.text.toLowerCase()}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

FoodInfo.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  food: PropTypes.shape({
    product_name: PropTypes.string,
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        text: PropTypes.string
      })
    )
  })
};

export default FoodInfo;
