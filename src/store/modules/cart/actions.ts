import { Product, ActionTypes } from "./types";

export function addProductToCartRequest(product: Product) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  }
}  

export function addProductToCartSuccess(product: Product) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  }
} 

export function addProductToCartFailure(id: number) {
  return { 
    type: ActionTypes.addProductToCartFailure,
    payload: {
      id,
    },
  }
} 