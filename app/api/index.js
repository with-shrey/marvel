// General api to access data
import ApiConstants from "./ApiConstants";

/**
 * Method for
 * @param {string} path Path of URL
 * @param {object} params Parameters to send to api
 * @param {string} method Values Can be {'POST', 'GET', 'PUT', 'PATCH', 'DELETE'}
 * @param {string} token For authenticated APIs send This parameter
 * @function
 * @example
 *
 * api('/api/login', {email :''}, 'POST')
 * api('/api/login', {email :''}, 'POST', 'token')
 */
export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token && { Authorization: token })
    },
    method: method,
    ...(params && { body: JSON.stringify(params) })
  };

  return fetch(ApiConstants.BASE_URL + path, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
