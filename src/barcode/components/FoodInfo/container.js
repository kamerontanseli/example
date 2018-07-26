import { connect } from "react-redux";
import FoodInfo from "./presenter";

export const mapStateToProps = (state, ownProps) => {
  const { finder, food } = state.barcode;
  return {
    ...finder,
    food: food[finder.barcode]
  };
};

export const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodInfo);
