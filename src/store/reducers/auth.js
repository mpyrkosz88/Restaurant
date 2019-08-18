import * as actionTypes from '../actions/actionTypes';

const initialState = {
    modalIsOpen: false,
    idToken: null,
    userId: null,
    error: null,
    isLogin: false,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL: 
        return {
            ...state,
            modalIsOpen: true,
        }
        case actionTypes.CLOSE_MODAL: 
        return {
            ...state,
            modalIsOpen: false,
        }
        case actionTypes.AUTH_SUCCESS:
        return {
          ...state,
          modalIsOpen: false,
          isLogin: true,
          idToken: action.idToken,
          userId: action.userId,
        }
        case actionTypes.AUTH_FAIL: 
        return {
          ...state,
          error: action.error
        }
        case actionTypes.AUTH_LOGOUT:
          return {
            ...state,
            idToken: null,
            userId: null,
            isLogin:false,
          }
        default:
            return state;
    }
}

export default auth