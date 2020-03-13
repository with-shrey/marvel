import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import Api from 'app/api';
import ApiConstants from 'app/api/ApiConstants';
import AsyncStorage from '@react-native-community/async-storage';

/**
     * Method for calling list api and store data in Store
     * @function*
     *
     */
export default function* loadListAsync(action) {
    try{
        let token;
        if(action.token){
            token = action.token;
        }else{
          token = yield call([AsyncStorage, AsyncStorage.getItem], 'token');
        }
        const response = yield call(Api, ApiConstants.GET_LIST, undefined , 'GET', token);
        if(response.characters){
            yield put(actions.onListResponse(response.characters));
        } else {
            yield put(actions.listFailed());
        }
    }catch(error){
        console.error(error);
        yield put(actions.listFailed());
    }
}
