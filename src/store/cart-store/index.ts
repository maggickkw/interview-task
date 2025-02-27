import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import initialState from './initialState';
import {cartI} from '../../types/store-types';
import {cartT, productT} from '../../types/product.type';

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: cartI, {payload}: PayloadAction<cartT>) => {
      const existingItem = state.cart.find(cart => cart.id === payload.id);

      if (existingItem) {
        state.cart = state.cart.map(cart =>
          cart.id === payload.id ? {...cart, qty: cart.qty + 1} : cart,
        );
      } else {
        state.cart = [...state.cart, {...payload, qty: 1}];
      }
    },
    increaseItem: (
      state: cartI,
      {payload}: PayloadAction<Pick<cartT, 'id'>>,
    ) => {
      const temp = state?.cart?.map(cart => {
        if (cart?.id === payload?.id) {
          return {...cart, qty: cart?.qty + 1};
        } else {
          return cart;
        }
      });
      state.cart = temp;
    },
    decreaseItem: (
      state: cartI,
      {payload}: PayloadAction<Pick<cartT, 'id'>>,
    ) => {
      let temp = state.cart.reduce<cartT[]>((acc, cart) => {
        if (cart.id === payload.id) {
          if (cart.qty > 1) {
            acc.push({...cart, qty: cart.qty - 1});
          }
        } else {
          acc.push(cart);
        }
        return acc;
      }, []);

      state.cart = temp;
    },
    removeItem: (state: cartI, {payload}: PayloadAction<Pick<cartT, 'id'>>) => {
      const temp = state?.cart?.filter(itemId => itemId?.id != payload.id);
      state.cart = temp;
    },
    clearCart: (state: cartI) => {
      state.cart = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, increaseItem, decreaseItem, removeItem, clearCart} =
  cartSlice.actions;

// export reducer function
export default cartSlice.reducer;
