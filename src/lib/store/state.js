import sampleProducts from './sample-products';

/**
 * The initial state of the application.
 */
export const initialState = {
  products: sampleProducts,
  basket: [],
  basketExpanded: false
};


/**
 * Gets a price from its stored representation.
 * Prices are stored as pennies for accuracy as per usual guidelines -
 * rounding inconsistencies can result from using base 2 floating point, and
 * JS doesn't have a base 10 floating point type
 * @param {*} value 
 */
export function toPrice(value) {
  return (value / 100).toFixed(2);
};


/**
 * Calculates the line total for a basket item.
 * @param {*} products the list of products to which the basket item refers
 * @param {*} item the basket item
 */
export function calculateLineTotal(products, item) {
  const product = products[item.id];

  // throw an error if the ID referred to a non-existent product
  if (!product)
    throw new Error(`product ${item.id} not found`);
  
  return product.price * item.quantity;
};


/**
 * Calculates the total for a basket.
 * @param {*} products the list of products to which the basket refers
 * @param {*} basket an array of basket items
 */
export function calculateBasketTotal(products, basket) {
  // sum the line totals
  return basket.reduce(
    (sum, item) => sum + calculateLineTotal(products, item),
    0
  );
};


/**
 * Calculates the total number of items in the basket.
 * @param {*} basket an array of basket items
 */
export function calculateNumberOfItems(basket) {
  // sum the quantities
  return basket.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
};
