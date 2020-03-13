/* 
 * combines all th existing reducers
 */
import * as loginReducer from 'app/features/login/reducers';
import * as homeReducers from 'app/features/home/reducers';

export default Object.assign({}, loginReducer, homeReducers);
