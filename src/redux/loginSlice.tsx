import {createSlice} from '@reduxjs/toolkit';

const initialState: {
  login: boolean;
} = {
  login: false,
};
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin(state) {
      state.login = !state.login;
    },
  },
});

export const {setLogin} = loginSlice.actions;

export default loginSlice.reducer;
