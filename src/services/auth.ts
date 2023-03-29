import {removeWindowClass} from '@app/utils/helpers';
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
