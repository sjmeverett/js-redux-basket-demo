import * as actions from '../lib/store/actions';
import reducer from '../lib/store/reducer';
import test from 'ava';

const createState = (items) => ({
  basket: items
});


test('ADD_ITEM', (t) => {
  const state = createState([]);
  const result = reducer(state, actions.addItem(2, 1));
  t.is(result.basket.length, 1);
  t.deepEqual(result.basket[0], {id: 2, quantity: 1});
  t.is(result.basketExpanded, true);
});


test('ADD_ITEM multiple', (t) => {
  const state = createState([
    {id: 2, quantity: 1}
  ]);

  const result = reducer(state, actions.addItem(4, 2));
  t.is(result.basket.length, 2);
  t.deepEqual(result.basket[1], {id: 4, quantity: 2});
});


test('ADD_ITEM with existing ID', (t) => {
  const state = createState([
    {id: 2, quantity: 1}
  ]);
  
  const result = reducer(state, actions.addItem(2, 4));
  t.is(result.basket.length, 1);
  t.deepEqual(result.basket[0], {id: 2, quantity: 5});
});


test('REMOVE_ITEM', (t) => {
  const state = createState([
    {id: 2, quantity: 1},
    {id: 3, quantity: 4}
  ]);
  
  const result = reducer(state, actions.removeItem(2));
  t.is(result.basket.length, 1);
  t.deepEqual(result.basket[0], {id: 3, quantity: 4});
});


test('EMPTY_BASKET', (t) => {
  const state = createState([
    {id: 2, quantity: 1},
    {id: 3, quantity: 4}
  ]);
  
  const result = reducer(state, actions.emptyBasket());
  t.is(result.basket.length, 0);
});


test('TOGGLE_BASKET expand', (t) => {
  const result = reducer({basketExpanded: false}, actions.toggleBasket());
  t.true(result.basketExpanded);
});


test('TOGGLE_BASKET collaspe', (t) => {
  const result = reducer({basketExpanded: true}, actions.toggleBasket());
  t.false(result.basketExpanded);
});
