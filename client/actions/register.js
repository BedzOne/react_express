import { REGISTER_SUCCESS, REGISTER_FAIL } from './constants';

export const registerSuccess = isRegistered => ({
    type: REGISTER_SUCCESS, 
    payload: isRegistered
});

export const registerFail = isRegistered => ({
    type: REGISTER_FAIL,
    payload: isRegistered
});