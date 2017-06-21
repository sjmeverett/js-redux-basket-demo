import store from '../store';
import * as actions from '../store/actions';
import { toPrice, calculateLineTotal } from '../store/state';
import BasketListItem from './basket-list-item';
import * as React from 'react';
import { connect } from 'react-redux';


/**
 * The list of basket items in the basket sidebar
 * @param {*} props 
 */
const BasketList = (props) => (
  <div className='basket-list'>
    {props.basket.length
      ? (
        <div>
          {props.basket.map((item) => {
            const product = props.products[item.id];

            return <BasketListItem id={item.id} name={product.name} image={product.image} price={toPrice(product.price)}
              quantity={item.quantity} lineTotal={toPrice(calculateLineTotal(props.products, item))} key={item.id} />
          })}

          <button className='btn btn-link btn-empty' role='button' onClick={() => {
              store.dispatch(actions.emptyBasket())
            }}>
            clear all items
          </button>
        </div>
      )
      : <p className='empty'>No books to read :(</p>
    }
  </div>
);

export default connect(
  (state) => ({
    products: state.products,
    basket: state.basket
  })
)(BasketList);
