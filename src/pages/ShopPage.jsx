import React from 'react'
import Products from '../components/shop/Products'
import ShowCaseSwiper from '../components/swipers/ShowCaseSwiper'
import { useState, useEffect } from 'react';
import Loading from '../components/skeletons/Loading';

const ShopPage = () => {

	return (
		<div className="mt-[160px] mb-[160px]">
			{/* <ShowCaseSwiper /> */}

			<Products />

		</div>
	)
}

export default ShopPage