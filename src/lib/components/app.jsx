import store from '../store';
import BasketSidebar from './basket-sidebar';
import ProductList from './product-list';
import './style';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * This is the main page layout.
 */
const app = (
  <Provider store={store}>
    <div className='page'>
      <div className='container main-content'>
        <div className='row'>
          <div className='col'>
            <ProductList />
          </div>
        </div>
      </div>

      <BasketSidebar />
    </div>
  </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement);

