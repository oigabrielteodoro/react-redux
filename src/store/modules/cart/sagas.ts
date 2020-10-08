import { all, takeLatest, select } from 'redux-saga/effects';
import { ApplicationState } from 'store';
import { addProductToCart } from './actions';

type CheckProductStockRequest = ReturnType<typeof addProductToCart>

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: ApplicationState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  })

  console.log(currentQuantity);

  console.log('Adicionou ao carrinho')
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)
])