import BasketDrawer from './basket-drawer';
import BasketList from './basket-list';
import * as React from 'react';
import { connect } from 'react-redux';

/**
 * The whole basket sidebar, i.e., drawer thingy and list of items
 * @param {*} props 
 */
export const BasketSidebar = (props) => {
  return (
    <div className={`basket-sidebar ${props.visible ? '' : 'closed'}`}>
      <BasketDrawer products={props.products} basket={props.basket} />

      <div className='content'>
        <BasketList products={props.products} basket={props.basket} />
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    products: state.products,
    basket: state.basket,
    visible: state.basketExpanded
  })
)(BasketSidebar);
