import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, incrementOrder, decrementOrder, removeOrder } from '../../redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MiniCart = () => {

	const dispatch = useDispatch();
	const orders = useSelector(state => state.cart.orders);
	const cartIsOpen = useSelector(state => state.cart.cartIsOpen);

	const clickHandler = (id, action) => {
		switch (action) {
			case 'toggle': {
				dispatch(toggleCart(!cartIsOpen))
				break;
			}
			case 'incrementQuantity': {
				dispatch(incrementOrder(id))
				break;
			}
			case 'decrementQuantity': {
				dispatch(decrementOrder(id))
				break;
			}
			case 'removeOrder': {
				dispatch(removeOrder(id))
				break;
			}
		}
	}

	return (
		<div
			className="fixed top-0 left-0 w-screen h-screen bg-filterBaground z-80 flex justify-center items-center">
			<motion.div
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.5, opacity: 0 }}
				className="relative w-screen max-w-lg max-h-96 overflow-auto bg-white px-4 py-8 sm:px-6 lg:px-8"
				aria-modal="true"
				role="dialog"
				tabIndex="-1"

			>
				<button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110" onClick={() => { clickHandler(null, 'toggle') }}>
					<span className="sr-only">Close cart</span>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-5 w-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div className="mt-4 space-y-6">
					<ul className="space-y-4">
						{orders.map((order) => {
							return (
								<li key={order.id} className="flex items-center gap-4">
									<img
										src={order.img}
										alt=""
										className="w-16 rounded object-cover"
									/>
									<div>
										<h3 className="text-sm text-gray-900">{order.name}</h3>

										<dl className="mt-0.5 space-y-px text-[10px] text-gray-600">

											<div>
												<dt className="inline">Color:</dt>
												<dd className="inline">White</dd>
											</div>
											<div>
												<dt className="inline">Price: </dt>
												<dd className="inline">{order.price}</dd>
											</div>
										</dl>
									</div>

									<div className="flex flex-1 items-center justify-end gap-2">

										<div className="flex items-center rounded border border-gray-100 space-x-2">
											<span
												onClick={() => clickHandler(order.id, 'decrementQuantity')}
												className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
											<span>{order.quantity}</span>
											<span
												onClick={() => clickHandler(order.id, 'incrementQuantity')}
												className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
										</div>
										<button
											onClick={() => clickHandler(order.id, 'removeOrder')}
											className="text-gray-600 transition hover:text-red-600">
											{/* remove icon */}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth="1.5"
												stroke="currentColor"
												className="h-4 w-4"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
												/>
											</svg>
										</button>
									</div>
								</li>
							)
						})}
					</ul>

					<div className="space-y-4 text-center">

						{orders.length ? (<Link
							onClick={() => { clickHandler(null, 'toggle') }}
							to="my-cart"
							className="block rounded bg-green-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-green-600"
						>
							View my cart
						</Link>) :
							(
								<div className='flex flex-col items-center'>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h:24">
										<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
									</svg>
									<h4 className="text-2xl">Your cart is currently empty!</h4>
								</div>
							)
						}


						<Link
							to="shop"
							className="uppercase inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
							onClick={() => { clickHandler(null, 'toggle') }}
						>
							{orders.length ? 'Continue shopping' : 'Go To Shop'}
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default MiniCart