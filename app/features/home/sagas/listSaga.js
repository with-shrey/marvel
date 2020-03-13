/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import { navigateToHome } from 'app/navigation/NavigationHelpers';
import Api from 'app/api';
import ApiConstants from 'app/api/ApiConstants';
import AsyncStorage from '@react-native-community/async-storage';
// worker Saga that fetchs list from server
export default function* loadListAsync() {
    try{
        const token = yield call([AsyncStorage, AsyncStorage.getItem], 'token')
        const response = yield call(Api, ApiConstants.GET_LIST, undefined , 'GET', token);
        yield put(actions.onListResponse(response.characters));
    }catch(error){
        console.error(error)
    }
}
