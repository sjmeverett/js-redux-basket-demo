import ProductCard from './product-card';
import * as React from 'react';
import { connect } from 'react-redux';

/**
 * The list of products, composed of several ProductCards in a responsive layout
 * @param {*} props 
 */
export const ProductList = (props) => (
  <div className='container-fluid'>
    <div className='row'>
      {props.products.map((product, i) => (
        <div className='col' key={i}>
          <ProductCard id={i} product={product} />
        </div>
      ))}
    </div>
  </div>
);

export default connect(
  (state) => ({
    products: state.products
  })
)(ProductList);
