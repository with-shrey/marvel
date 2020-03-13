/*
 * Reducer actions related with HomeScreen
 */
import * as types from "./actionTypes";

export function requestList() {
  return {
    type: types.GET_LIST_REQUEST
  };
}

export function listFailed() {
  return {
    type: types.GET_LIST_FAILED
  };
}

export function onListResponse(list) {
  return {
    type: types.GET_LIST_RESPONSE,
    list
  };
}

export function enableLoader() {
  return {
    type: types.HOMESCREEN_ENABLE_LOADER
  };
}

export function disableLoader() {
  return {
    type: types.HOMESCREEN_DISABLE_LOADER
  };
}
