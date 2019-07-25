import * as actionTypes from '../actions/actionTypes';

const initialState = {
    modalIsOpen: false,
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
        default:
            return state;
    }
}

export default auth