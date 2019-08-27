import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';


export const loadAsideData = (data) => {
  return {
    type: actionTypes.LOAD_ASIDE_DATA,
    asideData: data,
  }
}

export const loadBarData = (data) => {
  return {
    type: actionTypes.LOAD_BAR_DATA,
    barData: data,
  }
}

export const loadRestaurantData = (data) => {
  return {
    type: actionTypes.LOAD_RESTAURANT_DATA,
    restaurantData: data,
  }
}

export const loadMenuData = (data) => {
  return {
    type: actionTypes.LOAD_MENU_DATA,
    menuData: data,
  }
}

export const loadSliderData= (data) => {
  return {
    type: actionTypes.LOAD_SLIDER_DATA,
    sliderData: data,
  }
}

export const initAsideData = () => {
  return dispatch => {
    axios.get('https://restaurant-984e6.firebaseio.com/Aside.json')
      .then(response => {
        dispatch(loadAsideData(response.data))
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const initBarData = () => {
  return dispatch => {
    axios.get('https://restaurant-984e6.firebaseio.com/Bar.json')
      .then(response => {
        dispatch(loadBarData(response.data))
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const initRestaurantData = () => {
  return dispatch => {
    axios.get('https://restaurant-984e6.firebaseio.com/Restaurant.json')
      .then(response => {
        dispatch(loadRestaurantData(response.data))
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const initMenuData = () => {
  return dispatch => {
    axios.get('https://restaurant-984e6.firebaseio.com/Menu.json')
      .then(response => {
        dispatch(loadMenuData(response.data))
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export const initSliderData = () => {
  return dispatch => {
    axios.get('https://restaurant-984e6.firebaseio.com/Slider.json')
      .then(response => {
        dispatch(loadSliderData(response.data))
      })
      .catch(error => {
        console.log(error);
      });
  }
}