import "./FoodInfo.css";
import React from "react";
import PropTypes from "prop-types";
import { Alert, Table } from "reactstrap";
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
          <Alert color="danger" data-testid="error">
            Product was not found
          </Alert>
        </div>
      </div>
    );
  } else if (!food) {
    return (
      <div className="container">
        <div className="FoodInfo">
          <Alert color="info" data-testid="placeholder">
            Take a picture of a barcode to find food
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h3 style={{ marginBottom: 20 }}>{food.product_name}</h3>
        {food.allergens && (
          <Alert color="danger">
            <strong>Allergies: </strong> {food.allergens.split(",").join(", ")}
          </Alert>
        )}

        {food.nutrient_levels_tags.map((tag, index) => {
          const sentence = tag
            .split(/(:|-)/)
            .filter(s => s !== "-" && s !== ":")
            .slice(1)
            .join(" ");
          return (
            <Alert color={sentence.indexOf("high") > -1 ? "danger" : "success"}>
              {sentence}
            </Alert>
          );
        })}

        <Table bordered striped responsive>
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>%</th>
            </tr>
          </thead>
          <tbody>
            {food.ingredients.map(ingredient => (
              <tr key={ingredient.id}>
                <td>{ingredient.text}</td>
                <td>{ingredient.percent ? `${ingredient.percent}%` : ""}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Table bordered striped responsive>
          <thead>
            <tr>
              <th>Type</th>
              <th>Grams</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Protein</td>
              <td>{food.nutriments.proteins}g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{food.nutriments.fat}g</td>
            </tr>
            <tr>
              <td>Carbohydrates</td>
              <td>{food.nutriments.carbohydrates}g</td>
            </tr>
          </tbody>
        </Table>
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
