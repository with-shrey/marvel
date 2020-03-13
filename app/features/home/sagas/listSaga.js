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
export default function* loadListAsync() {
    try{
        const token = yield call([AsyncStorage, AsyncStorage.getItem], 'token')
        const response = yield call(Api, ApiConstants.GET_LIST, undefined , 'GET', token);
        yield put(actions.onListResponse(response.characters));
    }catch(error){
        console.error(error)
    }
}
