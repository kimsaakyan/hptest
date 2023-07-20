import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		orders: [],
		cartIsOpen: false,
	},
	reducers: {
		toggleCart: (state, action) => {
			state.cartIsOpen = action.payload;
		},
		setOrders: (state, action) => {
			// console.log(state, action)
			const { id, price, brand, name, img } = action.payload;
			// state.orders = action.payload;
			const existingOrder = state.orders.find(order => order.id === id);

			if (existingOrder) {
				state.orders = state.orders.map(order => {
					if (order.id === id) {
						return { ...order, quantity: order.quantity + 1 }
					} else {
						return order;
					}
				})

			} else {
				const newOrder = {
					id,
					name,
					price,
					img,
					brand
				}
				state.orders = [...state.orders, { ...newOrder, quantity: 1 }];
			}
		},
		incrementOrder: (state, action) => {
			state.orders = state.orders.map((order) => {
				if (order.id === action.payload) {
					return { ...order, quantity: order.quantity + 1 }
				}
				return order;
			})
		},
		decrementOrder: (state, action) => {
			state.orders = state.orders.map((order) => {
				if (order.id === action.payload && order.quantity !== 1) {
					return { ...order, quantity: order.quantity - 1 }
				}
				return order;
			})
		},
		removeOrder: (state, action) => {
			state.orders = state.orders.filter((order) => order.id !== action.payload)
		},

	}
})




export const { toggleCart, setOrders, incrementOrder, decrementOrder, removeOrder } = cartSlice.actions;

export default cartSlice.reducer;