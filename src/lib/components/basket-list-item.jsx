import store from '../store';
import * as actions from '../store/actions';
import * as React from 'react';

/**
 * An item in the basket list view
 */
export default (props) => (
  <div className='basket-item'>
    <img src={props.image} alt={props.name} />
    <span className='badge badge-pill badge-default'>{props.quantity}</span> <strong>{props.name}</strong><br/>
    <small>£{props.price} each</small>

    <div className='bottom-bar'>
      <button className='btn btn-link mr-2' role='button' title='remove' onClick={() => {
          store.dispatch(actions.removeItem(props.id));
        }}>
        <i className='fa fa-trash' />
      </button>
      £{props.lineTotal}
    </div>
  </div>
);
