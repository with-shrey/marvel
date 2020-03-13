import { createSelector } from 'reselect';

//very basic .. this has nothing to do with Reselect
export const getId = state => state.loginReducer.id;

//Selector to get Login State in Component
export const getLoginState = createSelector(
    [getId],
    id => (id === -1 ? 'Not Logged In' : 'Logged In')
);
