import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Product } from 'store/modules/cart/types';

import { ApplicationState } from 'store';
import { addProductToCartRequest } from 'store/modules/cart/actions';


interface CatalogItemProps {
  product: Product;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<ApplicationState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })

  const handleAddProductToCart = useCallback((product: Product) => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch]);

  return (
    <article>
      <strong>{product.title}</strong>{" - "}
      <span>{product.price}</span>{" "}
       
      <button 
        type="button" 
        onClick={() => handleAddProductToCart(product)}
      >
        Comprar
      </button>

      {hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </article>
  );
}

export default CatalogItem;