import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './ducks/cart';

const store = configureStore({
  reducer: cartReducer,
});
export default store;
