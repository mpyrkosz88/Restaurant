import axios from 'axios'
import * as actionTypes from './actionTypes';

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    }
    else {
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userId))
    }
  };
};

export const auth = (email, password, login)  => {
  return dispatch => {
    const authData = {
      email: email,
      password:password
    }
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkw_CkUM4Vx1N1MASMo3baA2k_VP01XUs";
      if (!login) {
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkw_CkUM4Vx1N1MASMo3baA2k_VP01XUs";
      }
    axios.post(url, authData)
        .then(response => {
          const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
          localStorage.setItem('token', response.data.idToken);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('userId', response.data.localId);
          dispatch(authSuccess(response.data.idToken, response.data.localId));
        })
        .catch(err=>{
          dispatch(authFail(err.response.data.error));
        })
  };
};
