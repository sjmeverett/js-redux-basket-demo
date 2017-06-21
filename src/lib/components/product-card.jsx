import * as actions from '../store/actions';
import store from '../store';
import { toPrice } from '../store/state';
import * as React from 'react';

/**
 * A single product in the list of products
 */
export default (props) => (
  <div className='card product-card mb-4'>
    <img className='card-img-top img-fluid' src={props.product.image} alt={props.product.name} />
    <div className='card-block'>
      <h4 className='card-title'>{props.product.name}</h4>

      <button className='btn btn-primary' role='button'
        onClick={() => store.dispatch(actions.addItem(props.id, 1))}>
        £{toPrice(props.product.price)} <i className='fa fa-cart-plus' />
      </button>
    </div>
  </div>
);
