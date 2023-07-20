import { configureStore } from '@reduxjs/toolkit';
import headphonesReducer from './slices/headphonesSlice';
import cartSlice from './slices/cartSlice';
import wishListSlice from './slices/wishListSlice';

const store = configureStore({
	reducer: {
		cart: cartSlice,
		headphones: headphonesReducer,
		wishList: wishListSlice
	}
});

export default store;
