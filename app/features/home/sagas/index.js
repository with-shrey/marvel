/**
 * Redux saga class init
 * There can be multiple sagas
 * Export them as an array
 * Top level sagas in store will take care of combining sagas
 */
import { takeEvery } from 'redux-saga/effects';
import * as types from '../actionTypes';
import listSaga from './listSaga';

export const homeSagas = [takeEvery(types.GET_LIST_REQUEST, listSaga)];
