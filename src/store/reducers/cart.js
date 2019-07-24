import * as actionTypes from '../actions/actionTypes'
import products from './products';

const initialState = {
  cart_items: [],
  products: products,
  price: 0,
  cart_quantity: 0
}

const addItem = (state, action) => {
  let cart_item = state.products.find(item => {
    return item.id === action.payload.id
  })
  let in_cart = state.cart_items.find(item => action.payload.id === item.id)
  if (in_cart) {
    cart_item.quantity += 1
    return {
      ...state,
      price: state.price + action.payload.price,
      cart_items: [...state.cart_items],
      cart_quantity: state.cart_quantity + 1
    }
  }
  else {
    cart_item.quantity = 1;
    return {
      ...state,
      cart_items: [...state.cart_items, cart_item],
      price: state.price + action.payload.price,
      cart_quantity: state.cart_quantity + 1
    }
  }
}

const removeItem = (state, action) => {
  if (action.payload.quantity > 1) {
    let cart_item = state.cart_items.find(item => action.payload.id === item.id);
    cart_item.quantity -= 1
    return {
      ...state,
      cart_items: [...state.cart_items],
      price: state.price - action.payload.price,
      cart_quantity: state.cart_quantity - 1
    }
  }
  else {
    return {
      ...state,
      cart_items: state.cart_items.filter(item => item.id !== action.payload.id),
      price: state.price - action.payload.price,
      cart_quantity: state.cart_quantity - 1
    }
  }
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      return addItem(state, action)
    case actionTypes.CART_REMOVE:
      return removeItem(state, action)
    default:
      return state;
  }
}

export default cart