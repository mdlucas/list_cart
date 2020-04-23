import {createSlice} from '@reduxjs/toolkit';
import {isEmpty} from 'lodash';

export const initialState = {
  itemsCart: {},
};

const cart = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewItem(state, action) {
      if (isEmpty(state.itemsCart[action.payload.id])) {
        state.itemsCart[action.payload.id] = {...action.payload, quantity: 1};
      } else {
        state.itemsCart[action.payload.id].quantity += 1;
      }
    },
    removeItem(state, action) {
      if (state.itemsCart[action.payload.id].quantity > 1) {
        state.itemsCart[action.payload.id].quantity -= 1;
      } else {
        delete state.itemsCart[action.payload.id];
      }
    },
  },
});

export const {addNewItem, removeItem} = cart.actions;
export const selectItems = state => state.itemsCart;

export default cart.reducer;
