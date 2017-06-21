import store from '../store';
import * as actions from '../store/actions';
import { toPrice, calculateBasketTotal, calculateNumberOfItems } from '../store/state';
import * as React from 'react';

/**
 * This is the sidebar which summarises and expands/collapses the basket view
 */
export default (props) => (
  <div className='drawer' onClick={
      () => store.dispatch(actions.toggleBasket())
    }>
    <div className='title'>
      <i className='fa fa-angle-double-left expand-icon' />
      <i className='fa fa-angle-double-left collapse-icon' />
      &nbsp; Basket
    </div>

    <div className='summary'>
      <span className='badge badge-pill'>{calculateNumberOfItems(props.basket)}</span>&nbsp;
      £{toPrice(calculateBasketTotal(props.products, props.basket))}
    </div>
  </div>
);
