import "./FoodInfo.css";
import React from "react";
import PropTypes from "prop-types";
import Loader from "../../../app/shared/ui/Loader";

export const IngredientDescription = ({ text }) => {
  return text
    .filter((s, i) => (s === "(" ? text[i + 1] !== "(" : s))
    .map((chunk, chunkIndex) => {
      return chunk.split(" ").map((word, wordIndex) => {
        if (word.match(/_/g)) {
          return (
            <strong key={chunkIndex + wordIndex}>
              {word.replace(/_/g, "")}{" "}
            </strong>
          );
        } else {
          return word === '(' ? word : word + " ";
        }
      });
    });
};

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
          src={food.image_front_url}
          alt={food.product_name}
        />
        <IngredientDescription text={food.ingredients_debug} />
      </div>
    </div>
  );
};

FoodInfo.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  food: PropTypes.shape({
    product_name: PropTypes.string,
    image_front_url: PropTypes.string,
    ingredients_debug: PropTypes.arrayOf(PropTypes.string)
  })
};

export default FoodInfo;
