import axios from 'axios'
import * as actionTypes from './actionTypes';

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
  };
};

export const authFail = (error) => {
  switch (error.message) {
    case "EMAIL_EXISTS":
      return {
        type: actionTypes.AUTH_FAIL,
        error: "This email already exist"
      }
    case "EMAIL_NOT_FOUND":
      return  {
        type: actionTypes.AUTH_FAIL,
        error: "Your email is not found"
      }
    case "INVALID_PASSWORD":
      return  {
        type: actionTypes.AUTH_FAIL,
        error: "Your password is invalid"
      }
    default:
      return error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime*1000)
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    }
    else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if(expirationDate < new Date()) {
        dispatch(logout());
      }
      const userId = localStorage.getItem('userId');
      dispatch(authSuccess(token, userId))
      dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 166.6));
      dispatch(getAddress(token, userId))
    }
  };
};

// userdata
export const getUserData = (userData) => {
  return {
    type: actionTypes.GET_USER_DATA,
    userData:userData,
  }
}


// userdata
export const getAddress = (token, userId) => {
  return dispatch => {
    const queryParams = token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get("https://restaurant-984e6.firebaseio.com/usersAddress.json?auth=" + queryParams)
    .then(response => {
      const userData =[]
      for (let key in response.data) {
        userData.push({
          ...response.data[key]
        })
      }
      dispatch(getUserData(...userData))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const auth = (email, password)  => {
  return dispatch => {
    const authData = {
      email: email,
      password:password,
      returnSecureToken: true
    }
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDkw_CkUM4Vx1N1MASMo3baA2k_VP01XUs";
    axios.post(url, authData)
        .then(response => {
          const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 166.6); // set expire time to 10 min
          localStorage.setItem('token', response.data.idToken);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('userId', response.data.localId);
          dispatch(authSuccess(response.data.idToken, response.data.localId));
          dispatch(checkAuthTimeout(response.data.expiresIn));
          dispatch(getAddress(response.data.idToken, response.data.localId))
        })
        .catch(err=>{
          console.log(err.response.data.error);
          dispatch(authFail(err.response.data.error));
        })
  };
};

export const register = (email, password, street, number)  => {
  return dispatch => {
    const authData = {
      email: email,
      password:password,
      returnSecureToken: true,
    }

    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkw_CkUM4Vx1N1MASMo3baA2k_VP01XUs";
    axios.post(url, authData)
        .then(response => {
          const token = response.data.idToken;
          const userId=response.data.localId;
          dispatch(registerSuccess())
          console.log(response.data);
          axios.post("https://restaurant-984e6.firebaseio.com/usersAddress.json?auth=" + token, {
          email: email,
          street: street,
          number: number, 
          userId: userId
        })
          .then(response => {
            console.log(response.data);
          })
          .catch(err=> console.log(err.response.data.error))
        })
        .catch(err=>{
          console.log(err.response.data.error);
          dispatch(authFail(err.response.data.error));
        })
  };
};
