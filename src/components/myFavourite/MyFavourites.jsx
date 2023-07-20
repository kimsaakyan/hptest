import mainImg from '../../images/img-for-myFavouritePage.png';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import headphoneBanner from "../../images/headphone-banner.jpg"

import MyFavouriteProduct from "./myFavouriteProduct/MyFavouriteProduct";


const Products = () => {

	const wishList = useSelector((state) => state.wishList.wishList);



	return (

		<div className="flex flex-col items-center gap-4">
			{
				wishList.length ? (
					<div className='flex flex-col gap-4'>
						<div className='text-center mb-[48px]'>
							<h3 className='text-7xl text-mainColor font-semibold'>My Favourite Products</h3>
						</div>
						<div className="px-6 flex flex-wrap gap-10 justify-center">
							{wishList.map((item) => {
								return <MyFavouriteProduct key={item.id} {...item} />
							})}
						</div>
					</div>)
					:
					(<div className="text-center flex flex-col gap-4">
						<h3 className="text-mainColor text-4xl">This page is empty at the moment.</h3>
						<p className="text-xl font-extralight">To add items of interest to your favorites, simply go to the shop page and click the 'Add to Favorites' button.</p>
					</div>)
			}
		</div>
	)
}

export default Products
