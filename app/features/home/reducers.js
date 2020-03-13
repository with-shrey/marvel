/* Home Reducer
 * handles state in the home feature
 */
import createReducer from 'app/lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    loadingList: false,
    list:[]
};

export const listReducer = createReducer(initialState, {
    [types.GET_LIST_REQUEST](state) {
        return {
            ...state,
            loadingList: true
        }
    },
    [types.GET_LIST_RESPONSE](state, action) {
        return {
            ...state,
            list: action.list,
            loadingList: false
        }
    },
    [types.GET_LIST_FAILED](state, action) {
        return {
            ...state,
            loadingList: false
        }
    },
});
