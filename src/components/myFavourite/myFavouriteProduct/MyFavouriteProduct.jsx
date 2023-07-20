import { useDispatch } from "react-redux";
import { setWishList, removeWishItem } from "../../../redux/slices/wishListSlice";
import { setOrders } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import Alert from "../../alert/Alert";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SuccessfullyRemoved from "../../alert/SuccessfullyRemoved";
import SuccessfullyAdded from "../../alert/SuccessfullyAdded";



const MyFavouriteProduct = (props) => {
	const dispatch = useDispatch();


	const { id, name, brand, img, price } = props;

	const clickHandler = (action, newItem) => {

		switch (action) {
			case 'setOrders': {

				dispatch(setOrders(newItem));
				setGoodBuy(!isGoodBuy);

				setTimeout(() => {
					setGoodBuy(false);
				}, 2000)

				break;
			}
			case 'removeWish': {
				dispatch(removeWishItem(newItem.id));
				break;
			}
		}
	}
	// state for alert(goodBuy, remove item)
	const [isGoodBuy, setGoodBuy] = useState(false);



	return (
		<div
			className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
		>
			<Link to={name}>
				<img className="p-8 rounded-t-lg" src={img} alt="product image" />
			</Link>
			<div className="px-5 pb-5">
				<Link to={name}>
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
					<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{brand}</h5>
				</Link>

				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
					<div className="flex space-x-2">
						<button
							onClick={() => {
								clickHandler('setOrders', { id, name, brand, img, price })
							}}
							className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm p-5 py-2.5 text-center">Add to cart</button>
						<button
							onClick={() => {
								clickHandler('removeWish', { id, name, brand, img, price })
							}}
							className="p-3 py-2.5 border-2 border-red-500 text-red-500 rounded-lg hover:text-white hover:bg-red-500 transition-all duration-200 ">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
							</svg>

						</button>
					</div>
				</div>
			</div>
			<AnimatePresence>
				{isGoodBuy && <SuccessfullyAdded />}
			</AnimatePresence>
		</div>

	)
}

export default MyFavouriteProduct