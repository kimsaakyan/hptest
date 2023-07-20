import { createSlice } from "@reduxjs/toolkit";
import headphone1 from '../../images/headphones/headphone1.jpg'
import headphone2 from '../../images/headphones/headphone2.jpg'
import headphone3 from '../../images/headphones/headphone3.jpg'
import headphone4 from '../../images/headphones/headphone4.jpg'
import headphone5 from '../../images/headphones/headphone5.jpg'
import headphone6 from '../../images/headphones/headphone6.jpg'

const initialState = [
	{
		id: Math.random(),
		name: 'Headphone-A1',
		brand: 'Brand A',
		price: '100$',
		type: 'wireless',
		description: 'the best headphone',
		features: [],
		img: headphone1,
		isFavourite: false,
	},
	{
		id: Math.random(),
		name: 'Headphone-A2',
		brand: 'Brand A',
		price: '50$',
		type: 'wireless',
		description: 'the best headphone',
		features: [],
		img: headphone2,
		isFavourite: false,
	},
	{
		id: Math.random(),
		name: 'Headphone-B1',
		brand: 'Brand B',
		price: '75$',
		type: 'wireless',
		description: 'the best headphone',
		features: [],
		img: headphone3,
		isFavourite: false,
	},
	{
		id: Math.random(),
		name: 'Headphone-B2',
		brand: 'Brand B',
		price: '250$',
		type: 'wireless',
		description: 'the best headphone',
		features: [],
		img: headphone4,
		isFavourite: false,
	},
	{
		id: Math.random(),
		name: 'Headphone-C1',
		brand: 'Brand C',
		price: '300$',
		type: 'wireless',
		description: 'the best headphone',
		features: [],
		img: headphone5,
		isFavourite: false,
	},
	{
		id: Math.random(),
		name: 'Headphone-C2',
		brand: 'Brand C',
		price: '145$',
		type: 'wireless',
		description: 'the best headphone',
		features: [],
		img: headphone6,
		isFavourite: false,
	},
];

const headphonesSlice = createSlice({
	name: "headphones",
	initialState: {
		headphones: initialState,
		filteredHeadphones: initialState
	},
	reducers: {
		filterGoods: (state, action) => {
			const { minPrice, maxPrice, brand } = action.payload;

			console.log(minPrice, maxPrice, brand)

			const filteredProducts = state.headphones.filter((headphone) => {
				const priceFilter = (
					(!minPrice || parseInt(headphone.price) >= +minPrice) && (!maxPrice || parseInt(headphone.price) <= +maxPrice)
					// bag.price >= 100 && bag.price <= 500
				)

				const sizeFilter = (
					!brand || headphone.brand === brand
				);

				if (priceFilter && sizeFilter) {
					return headphone
				}
			})

			state.filteredHeadphones = filteredProducts;
		}
	}
});

export const { filterGoods } = headphonesSlice.actions;

export default headphonesSlice.reducer;