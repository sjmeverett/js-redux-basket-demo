import * as actions from './actions';

/**
 * Adds an item to the basket.
 * @param {*} state the app state
 * @param {*} action an ADD_ITEM action
 */
function addItem(state, action) {
  // check if the product is already in the basket
  const index = state.basket.findIndex((item) => item.id === action.id);
  let basket;

  if (index > -1) {
    // add to the quantity of an existing item
    const item = state.basket[index];

    basket = replaceItem(state.basket, index, {
      ...item,
      quantity: item.quantity + action.quantity
    });

  } else {
    // add the product to the basket
    basket = addNewItem(state.basket, {
      id: action.id,
      quantity: action.quantity
    });
  }

  return {
    ...state,
    basket,
    basketExpanded: true
  };
}


/**
 * Adds an item to an array without mutating the array.
 * Returns a new array composed of a copy of the old array plus the new item.
 * @param {*} array 
 * @param {*} item 
 */
function addNewItem(array, item) {
  return [...array, item];
}


/**
 * Updates an item at a specific index without mutating the array.
 * @param {*} array 
 * @param {*} index 
 * @param {*} value 
 */
function replaceItem(array, index, value) {
  return [
    ...array.slice(0, index),
    value,
    ...array.slice(index + 1)
  ];
}


/**
 * Removes an item from the basket.
 * @param {*} state the app state
 * @param {*} action a REMOVE_ITEM action
 */
function removeItem(state, action) {
  return {
    ...state,
    basket: state.basket.filter((item) => item.id !== action.id)
  };
}


/**
 * Empties the basket.
 * @param {*} state the app state
 * @param {*} action an EMPTY_BASKET action
 */
function emptyBasket(state, action) {
  return {
    ...state,
    basket: []
  };
}


/**
 * The main reducer.
 * @param {*} state 
 * @param {*} action 
 */
export default function reducer(state, action) {
  // dispatch to separate handler methods
  switch (action.type) {
    case actions.types.ADD_ITEM:
      return addItem(state, action);
    
    case actions.types.REMOVE_ITEM:
      return removeItem(state, action);

    case actions.types.EMPTY_BASKET:
      return emptyBasket(state, action);

    case actions.types.TOGGLE_BASKET:
      return {...state, basketExpanded: !state.basketExpanded};
    
    default:
      return state;
  }
};
