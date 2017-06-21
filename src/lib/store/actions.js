
/**
 * Action type constants
 */
export const types = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  EMPTY_BASKET: 'EMPTY_BASKET',
  TOGGLE_BASKET: 'TOGGLE_BASKET'
};

/**
 * Creates an action to add an item to the basket.
 * @param {*} id the ID of the item to add
 * @param {*} quantity the quantity of items to add
 */
export function addItem(id, quantity) {
  return {
    type: types.ADD_ITEM,
    id,
    quantity
  };
};

/**
 * Creates an action to remove an item from the basket.
 * @param {*} id the ID of the product to remove
 */
export function removeItem(id) {
  return {
    type: types.REMOVE_ITEM,
    id
  };
};

/**
 * Creates an action to empty the basket.
 */
export function emptyBasket() {
  return {
    type: types.EMPTY_BASKET
  };
};

/**
 * Creates an action to toggle the visibility of the basket sidebar.
 */
export function toggleBasket() {
  return {
    type: types.TOGGLE_BASKET
  };
};
