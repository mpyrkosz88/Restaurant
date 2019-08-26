import axios from '../../axios-orders';
import * as actionTypes from '../actions/actionTypes';

const orderSuccess = () => {
  return {
    type: actionTypes.ORDER_DISHES,
    orderDishes:true,
  }
}

export const finishOrder = () => {
  return {
    type: actionTypes.FINISH_ORDER,
    cart_items: [],
    price: 0,
    cart_quantity: 0,
    sideDrawerIsOpen: false,
    orderDishes:false,
  }
}

export const orderDishes = (cart) => {
  return dispatch => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const order = {
      userId:userId,
      order:cart
    };
    axios.post('https://restaurant-984e6.firebaseio.com/Orders.json?auth=' + token, order)
    .then(response => {
      dispatch(orderSuccess())
    })
    .catch(error => {
      console.log(error);
    })
  }
}

const loadProductsData = () => {
  axios.get('https://restaurant-984e6.firebaseio.com/Menu.json')
  .then(response => {
    getProducts(response.data)
  })
  .catch(error => {
    console.log(error);
  });
}

const getProducts = (database) => {
  Object.keys(database).map(header => {
    return database[header].map(name => {
      Object.values(name).map(item => {
        return item.map(item => {
          return products.push(item)
        })
      })
    })
  })
}

loadProductsData()
const products = [];

export default products