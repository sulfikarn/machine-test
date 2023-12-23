import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import countriesReducer from  './countriesSlice'
const store = configureStore({
    reducer:{
        auth:authReducer,
        countries:countriesReducer
    }
})
export default store;