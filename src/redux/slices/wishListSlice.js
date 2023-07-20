import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
	name: 'wishList',
	initialState: {
		wishList: []
	},
	reducers: {
		setWishList: (state, action) => {
			console.log(action)
			const { id, price, brand, name, img } = action.payload;
			// state.orders = action.payload;
			const existingItem = state.wishList.find(item => item.id === id);

			if (existingItem) {
				state.wishList = state.wishList.map(item => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 }

					} else {
						return item;
					}
				})

			} else {
				const newItem = {
					id,
					name,
					price,
					img,
					brand
				}
				state.wishList = [...state.wishList, { ...newItem, quantity: 1 }];
			}
		},
		removeWishItem: (state, action) => {
			const id = action.payload;
			state.wishList = state.wishList.filter((item) => item.id !== id);
		}

	}
});

export const { setWishList, removeWishItem } = wishListSlice.actions;

export default wishListSlice.reducer;