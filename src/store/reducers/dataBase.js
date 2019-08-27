import * as actionTypes from '../actions/actionTypes';

const initialState = {
    asideData: null,
    barData: null,
    restaurantData: null,
    menuData:null,
    dishesData: null,
    sliderData:null,
}

const dataBase = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_ASIDE_DATA: 
        return {
            ...state,
            asideData: action.asideData,
        }
        case actionTypes.LOAD_BAR_DATA: 
        return {
            ...state,
            barData: action.barData,
        }
        case actionTypes.LOAD_RESTAURANT_DATA: 
        return {
            ...state,
            restaurantData: action.restaurantData,
        }
        case actionTypes.LOAD_MENU_DATA: 
        return {
            ...state,
            menuData: action.menuData,
        }
        case actionTypes.LOAD_SLIDER_DATA: 
        return {
            ...state,
            sliderData: action.sliderData,
        }
        default:
            return state;
    }
}

export default dataBase