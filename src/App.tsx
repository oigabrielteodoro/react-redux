import React from 'react';
import { Provider } from 'react-redux';
 
import store from './store';

import Cart from './components/Cart';
import Catalog from './components/Catalog';

const App: React.FC = () => {
  return ( 
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
