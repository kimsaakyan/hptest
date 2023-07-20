import React from 'react'
// import blackBag from '../../images/bags/black-bag.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeOrder, incrementOrder, decrementOrder } from '../../redux/slices/cartSlice';
import EmptyCart from './EmptyCart';

const MainCart = () => {
	const dispatch = useDispatch();

	const orders = useSelector((state) => state.cart.orders);

	const totalCost = orders.reduce((totalPrice, order) => {
		return totalPrice + (parseInt(order.price) * order.quantity);
	}, 0);


	// const clickHandler = (id) => {
	// 	dispatch(removeOrder(id));
	// }


	const clickHandler = (id, action) => {
		switch (action) {
			case 'remove': {
				dispatch(removeOrder(id));
				break;
			}
			case 'incrementQuantity': {
				dispatch(incrementOrder(id))
				break;
			}
			case 'decrementQuantity': {
				dispatch(decrementOrder(id))
				break
			}
		}
	}

	return (
		<div className="w-full mx-auto mt-10">
			{orders.length ? (
				<div className="flex flex-col shadow-md my-10 md:flex-row">

					{/* left part (shooping cart) */}

					<div className="w-full bg-white px-10 py-10 border-2md:w-3/4">
						<div className="flex justify-between border-b pb-8">
							<h1 className="font-semibold text-2xl">Shopping Cart</h1>
							<h2 className="font-semibold text-2xl">{orders.length} Items</h2>
						</div>
						<div className="hidden md:flex mt-10 mb-5">
							<h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
							<h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
							<h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
							<h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
						</div>

						{/* item */}
						{orders.map((order => {
							return (
								<div className="flex flex-col space-y-4 md:flex-row items-center hover:bg-gray-100 -mx-8 px-6 py-5 border-2 rounded-lg mt-2">
									<div className="flex md:w-2/5">
										<div className="w-40">
											<img className="rounded-lg" src={order.img} alt="" />
										</div>
										<div className="flex flex-col justify-evenly ml-4 flex-grow">
											<span className="font-bold text-sm">{order.name}</span>
											{/* <span className="text-red-500 text-xs">Apple</span> */}
											<button
												className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left"
												onClick={() => { clickHandler(order.id, 'remove') }}
											>Remove</button>
										</div>
									</div>
									<div className="flex w-full justify-center md:w-1/5">
										<button onClick={() => clickHandler(order.id, 'decrementQuantity')}>
											<svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
											</svg>
										</button>

										<input disabled className="mx-2 border text-center w-8" type="text" value={order.quantity} />

										<button onClick={() => clickHandler(order.id, 'incrementQuantity')}>
											<svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
												<path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
											</svg>
										</button>
									</div>
									<span className="text-center md:w-1/5 font-semibold text-sm">Price: {order.price}</span>
									<span className="text-center md:w-1/5 font-semibold text-sm">Total: {parseInt(order.price) * order.quantity}$</span>
								</div>
							)
						}))}

						{/* item 2 */}




						<Link to="/shop" className="flex font-semibold text-green-500 text-sm mt-10">
							<svg className="fill-current mr-2 text-green-500 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
							Continue Shopping
						</Link>
					</div>



					{/* right part (Order Summary) */}

					<div className="w-full px-8 py-10 bg-zinc-900 text-white md:w-1/4">
						<h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
						<div className="flex justify-between mt-10 mb-5">
							<span className="font-semibold text-sm uppercase">Items {orders.length}</span>
							<span className="font-semibold text-sm">{totalCost}$</span>
						</div>

						<div className="py-10">
							<label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
							<input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
						</div>
						<button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
						<div className="border-t mt-8">
							<div className="flex font-semibold justify-between py-6 text-sm uppercase">
								<span>Total cost</span>
								<span>{totalCost}$</span>
							</div>
							<button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
						</div>
					</div>

				</div>
			) : (<EmptyCart />)}
		</div>
	)
}

export default MainCart