import { createStore } from 'redux';

import { CartState } from './modules/cart/types';

import rootReducer from './modules/rootReducer';
 
export interface ApplicationState {
  cart: CartState;
} 

const store = createStore(rootReducer);
 
export default store;