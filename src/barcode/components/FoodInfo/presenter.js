import "./FoodInfo.css";
import React from "react";
import PropTypes from "prop-types";
import { Alert, Table } from "reactstrap";
import Loader from "../../../app/shared/ui/Loader";

const FoodInfo = ({ loading, error, food }) => {
  if (loading) {
    return (
      <div>
        <div className="FoodInfo">
          <Loader data-testid="loader" />
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <div className="FoodInfo">
          <Alert color="danger" data-testid="error">
            Product was not found
          </Alert>
        </div>
      </div>
    );
  } else if (!food) {
    return (
      <div>
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
        {food.allergens_tags.length > 0 && (
          <Alert color="danger">
            <strong>Allergies: </strong>{" "}
            {food.allergens_tags
              .filter(s => s.indexOf("en:") > -1)
              .map(s => s.replace('en:', ''))
              .join(", ")}
          </Alert>
        )}

        {food.nutrient_levels_tags.map((tag, index) => {
          const sentence = tag
            .split(/(:|-)/)
            .filter(s => s !== "-" && s !== ":")
            .slice(1)
            .join(" ");

          let color = "success";

          if (sentence.indexOf("high") > -1) {
            color = "danger";
          } else if (sentence.indexOf("moderate") > -1) {
            color = "warning";
          }

          return (
            <Alert key={index} color={color}>
              {" "}
              {sentence}{" "}
            </Alert>
          );
        })}

        <Table bordered striped responsive>
          <thead>
            <tr>
              <th>Ingredient</th>
            </tr>
          </thead>
          <tbody>
            {food.ingredients.map((ingredient, index) => (
              <tr key={index}>
                <td>{ingredient.text}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Table bordered striped responsive>
          <thead>
            <tr>
              <th>Type</th>
              <th>Grams per 100g</th>
              <th>Grams per serving</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Protein</td>
              <td>{food.nutriments.proteins_100g || 'N/A'}</td>
              <td>{food.nutriments.proteins_serving|| 'N/A'}</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{food.nutriments.fat_100g || 'N/A'}</td>
              <td>{food.nutriments.fat_serving || 'N/A'}</td>
            </tr>
            <tr>
              <td>Carbohydrates</td>
              <td>{food.nutriments.carbohydrates_100g || 'N/A'}</td>
              <td>{food.nutriments.carbohydrates_serving || 'N/A'}</td>
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
