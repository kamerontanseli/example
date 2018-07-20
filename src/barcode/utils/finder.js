export const isResponseValid = response =>
  response.status === 1 &&
  response.product &&
  response.product.ingredients &&
  response.product.ingredients.length > 0;
