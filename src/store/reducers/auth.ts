import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  currentUser: any;
}

const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  currentUser: localStorage.getItem('user_data')
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, {payload}) => {
      localStorage.setItem('token', payload);
      state.isLoggedIn = true;
      state.token = payload;
    },
    logoutUser: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user_data');
      state.currentUser = {};
      state.isLoggedIn = false;
      state.token = null;
    },
    loadUser: (state, {payload}) => {
      console.log(payload)
      localStorage.setItem('user_data', JSON.stringify(payload));
      state.currentUser = payload;
    }
  }
});

export const {loginUser, logoutUser, loadUser} = authSlice.actions;

export default authSlice.reducer;
