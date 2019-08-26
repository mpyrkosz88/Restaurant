import * as actionTypes from '../actions/actionTypes';

const initialState = {
  modalIsOpen: false,
  idToken: null,
  userId: null,
  error: null,
  isLogin: false,
  registerSuccess: false,
  userData: null,
}

const openModal = (state, action) => {
  return {
    ...state,
    modalIsOpen: true,
  }
}

const closeModal = (state, action) => {
  return {
    ...state,
    modalIsOpen: false,
  }
}

const authSuccess = (state, action) => {
  return {
    ...state,
    modalIsOpen: false,
    isLogin: true,
    idToken: action.idToken,
    userId: action.userId,
  }
}

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error
  }
}

const logOut = (state, action) => {
  return {
    ...state,
    idToken: null,
    userId: null,
    isLogin: false,
  }
}

const registerSuccess = (state, action) => {
  return {
    ...state,
    registerSuccess: true,
  }
}

const closeRegiser = (state, action) => {
  return {
    ...state,
    registerSuccess: false,
    modalIsOpen: false,
  }
}

const getUserData = (state, action) => {
  return {
    ...state,
    registerSuccess: false,
    userData: action.userData,
  }
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return openModal(state, action);
    case actionTypes.CLOSE_MODAL:
      return closeModal(state, action)
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action)
    case actionTypes.AUTH_FAIL:
      return authFail(state, action)
    case actionTypes.AUTH_LOGOUT:
      return logOut(state, action)
    case actionTypes.REGISTER_SUCCESS:
      return registerSuccess(state, action)
    case actionTypes.CLOSE_REGISTER:
      return closeRegiser(state, action)
    case actionTypes.GET_USER_DATA:
      return getUserData(state, action)
    default:
      return state;
  }
}

export default auth