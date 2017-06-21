import reducer from './reducer';
import { initialState } from './state';
import { createStore } from 'redux';


const store = createStore(reducer, initialState);
export default store;
