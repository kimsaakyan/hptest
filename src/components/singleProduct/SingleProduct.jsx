import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { setOrders } from '../../redux/slices/cartSlice';
import { setWishList } from '../../redux/slices/wishListSlice';

const SingleProduct = (props) => {
	const dispatch = useDispatch();

	const params = useParams();
	const headphones = useSelector((state) => state.headphones.headphones);

	const headphone = headphones.find((headphone) => headphone.name === params.slug);

	const { id, price, brand, name, img } = headphone;

	// states for accordion
	const [showProductInfo, setShowProductInfo] = useState(false);
	const [showPrivacyRules, setShowPrivacyRules] = useState(false);
	const [showShippingRule, setShowShippingRule] = useState(false);

	const handleClick = (action, newOrder) => {

		switch (action) {
			case 'setOrders': {
				dispatch(setOrders(newOrder));
				break;
			}
			case 'setWishList': {
				dispatch(setWishList(newOrder));
			}
		}

	}


	return (
		<div className="my-[160px] flex flex-col items-center md:w-[700px] md:mx-auto shadow-lg mx-4">
			<div className="p-3 w-full sm-s:flex">
				{/* img block */}
				<div className="">
					<img src={headphone.img} className='w-[400px]' />
				</div>

				{/* info block */}
				<div className='md:w-[300px] flex flex-col justify-between gap-10'>
					<div className='flex flex-col gap-4'>
						<h3 className='text-3xl'>{headphone.name}</h3>
						<h4 className='text-2xl'>{headphone.price}</h4>
					</div>
					<div className='flex flex-col gap-2 '>
						<div className='flex justify-between space-x-1'>
							<button
								onClick={() => { handleClick('setOrders', { id, price, brand, name, img }) }}
								className='border border-black text-black p-2 w-full hover:bg-black hover:text-white transition-all duration-300'>Add to Cart</button>
							<button
								onClick={() => { handleClick('setWishList', { id, price, brand, name, img }) }}
								className='bg-black text-white p-2 hover:bg-white hover:text-black transition-all duration-300'>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
								</svg>
							</button>
						</div>
						<Link to="/my-cart" onClick={() => { handleClick({ id, price, brand, name, img }) }} className='bg-black text-white p-2 text-center'>Buy Now</Link>
					</div>
				</div>
			</div>


			<div className='w-full space-y-4'>
				<div className='mt-2 p-2'>
					<h4 onClick={() => { setShowProductInfo(!showProductInfo) }}
						className='font-semibold cursor-pointer uppercase'
					>Product Info</h4>
					<AnimatePresence>
						{showProductInfo && <motion.p
							initial={{ h: -1000, opacity: 0 }}
							animate={{ h: 0, opacity: 1 }}
							exit={{ h: -1000, opacity: 0 }}
							className='font-light'
						>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item.</motion.p>}
					</AnimatePresence>
					<hr className='' />
				</div>

				<div className='p-2'>
					<h4 onClick={() => { setShowPrivacyRules(!showPrivacyRules) }}
						className='font-semibold cursor-pointer uppercase'
					>Return & refund policy</h4>
					<AnimatePresence>
						{showPrivacyRules && <motion.p
							initial={{ h: -1000, opacity: 0 }}
							animate={{ h: 0, opacity: 1 }}
							exit={{ h: -1000, opacity: 0 }}
							className='font-light'
						>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</motion.p>}
					</AnimatePresence>
					<hr />
				</div>

				<div className="p-2">
					<h4 onClick={() => { setShowShippingRule(!showShippingRule) }}
						className='font-semibold cursor-pointer uppercase'
					>Shipping info</h4>
					<AnimatePresence>
						{showShippingRule && <motion.p
							initial={{ h: -1000, opacity: 0 }}
							animate={{ h: 0, opacity: 1 }}
							exit={{ h: -1000, opacity: 0 }}
							className='font-light'
						>I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.</motion.p>}
					</AnimatePresence>
				</div>
			</div>
		</div>
	)
}

export default SingleProduct