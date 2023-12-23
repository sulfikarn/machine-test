import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: !!localStorage.getItem('token'),
        errorMessage: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.isAuthenticated = true;
            localStorage.setItem('token', action.payload);
            state.errorMessage = null;
        },
        loginFailure: (state, action) => {
            state.isAuthenticated = false;
            state.errorMessage = 'Invalid email or password';
            localStorage.removeItem('token');
        },
        logoutSuccess: (state) => {
            state.isAuthenticated = false;
            state.errorMessage = null;
            localStorage.removeItem('token');
          },
    }
})


export const { loginUser, loginFailure, logoutSuccess } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;