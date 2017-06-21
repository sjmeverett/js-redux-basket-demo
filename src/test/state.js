import * as state from '../lib/store/state';
import test from 'ava';


test('toPrice', (t) => {
  t.is(state.toPrice(1234), '12.34');
});


test('calculateLineTotal', (t) => {
  const lineTotal = state.calculateLineTotal(
    state.initialState.products,
    {id: 2, quantity: 3}
  );

  t.is(lineTotal, 2292);
});


test('calculateLineTotal missing product', (t) => {
  const fn = () => state.calculateLineTotal(
    state.initialState.products,
    {id: 500, quantity: 3}
  );

  t.throws(fn);
});


test('calculateBasketTotal', (t) => {
  const total = state.calculateBasketTotal(
    state.initialState.products,
    [
      {id: 1, quantity: 2},
      {id: 4, quantity: 3}
    ]
  );

  t.is(total, 7220);
});


test('calculateBasketTotal', (t) => {
  const count = state.calculateNumberOfItems(
    [
      {id: 1, quantity: 2},
      {id: 4, quantity: 3}
    ]
  );

  t.is(count, 5);
});