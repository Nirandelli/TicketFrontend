import {removeWindowClass} from '@app/utils/helpers';
import {Gatekeeper} from 'gatekeeper-client-sdk';
import store from '@store/store';
import {logoutUser, loadUser} from '@store/reducers/auth';
import intance from '../utils/axios';

export const loginByAuth = async (email: string, password: string) => {
  const token = await intance
    .post('/login', {
      email,
      password
    })
    .then((response: any) => {
      const res = response.data.data;
      store.dispatch(loadUser(res));

      return res.token;
    })
    .catch((error: any) => {
      store.dispatch(logoutUser());
      return {error: error.response.data.error};
    });

  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  return token;
};

export const registerByAuth = async (email: string, password: string) => {
  const token = await Gatekeeper.registerByAuth(email, password);
  localStorage.setItem('token', token);
  removeWindowClass('register-page');
  removeWindowClass('hold-transition');
  return token;
};
