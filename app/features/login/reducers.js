/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    loading: false,
    isLoggedIn: false,
    id: -1,
    email: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            loading: true,
            email: action.email,
            password: action.password
        };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            loading: false,
            id: action.response.id
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            loading: false,
            isLoggedIn: false
        };
    }
});
