import * as actionTypes from '../actions/actionTypes';

const initialState = {
    authShow: true,
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_MODAL: 
        console.log(state);
        return {
            ...state,
            authShow: !state.authShow
        }
        default:
            return state;
    }
}

export default auth