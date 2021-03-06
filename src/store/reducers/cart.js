import * as actionTypes from '../actions/actionTypes'
import products from '../actions/cart';

const initialState = {
  cart_items: [],
  products: products,
  price: 0,
  cart_quantity: 0,
  sideDrawerIsOpen: false,
  orderDishes:false,
}

const addItem = (state, action) => {
  console.log(action);
  let cart_item = state.products.find(item => {
    return item.id === action.payload.id
  })
  let in_cart = state.cart_items.find(item => action.payload.id === item.id)
  if (in_cart) {
    cart_item.quantity += action.payload.quantity
    return {
      ...state,
      cart_items: [...state.cart_items],
      price: state.price + action.payload.price * action.payload.quantity,
      cart_quantity: state.cart_quantity + action.payload.quantity
    }
  }
  else {
    cart_item.quantity = action.payload.quantity;
    return {
      ...state,
      cart_items: [...state.cart_items, cart_item],
      price: state.price + action.payload.price * action.payload.quantity,
      cart_quantity: state.cart_quantity + action.payload.quantity
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

const openSidedrawer = (state, action) => {
  return {
    ...state,
    sideDrawerIsOpen: true,
  }
}

const closeSidedrawer = (state, action) => {
  return {
    ...state,
    sideDrawerIsOpen: false,
  }
}

const orderDishes = (state, action) => {
  return {
    ...state,
    orderDishes: action.orderDishes,
  }
}

const finishOrder = (state, action) => {
  return {
    ...state,
    cart_items: action.cart_items,
    price: action.price,
    cart_quantity: action.cart_quantity,
    sideDrawerIsOpen: action.sideDrawerIsOpen,
    orderDishes:action.orderDishes,
  }
}


const cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      return addItem(state, action)
    case actionTypes.CART_REMOVE:
      return removeItem(state, action)
    case actionTypes.OPEN_SIDEDRAWER:
      return openSidedrawer(state, action)
    case actionTypes.CLOSE_SIDEDRAWER:
      return closeSidedrawer(state, action)
    case actionTypes.ORDER_DISHES:
      return orderDishes(state, action)
    case actionTypes.FINISH_ORDER:
      return finishOrder(state, action)
    default:
      return state;
  }
}

export default cart