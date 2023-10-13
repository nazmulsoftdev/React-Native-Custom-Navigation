import {configureStore} from '@reduxjs/toolkit';
import authSliceReducer from '../src/featured/auth/authSlice';

const Store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
});

export default Store;
