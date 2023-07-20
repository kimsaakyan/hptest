import { useSelector, useDispatch } from "react-redux";
import { setOrders } from "../../../redux/slices/cartSlice";
import { setWishList } from "../../../redux/slices/wishListSlice";
import { Link } from "react-router-dom";
import Alert from "../../alert/Alert";
import SuccessfullyAdded from "../../alert/SuccessfullyAdded";
import SuccessfullyRemoved from "../../alert/SuccessfullyRemoved";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";



const Product = (props) => {
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
			case 'setWishList': {
				dispatch(setWishList(newItem));
				setGoodBuy(!isGoodBuy);

				setTimeout(() => {
					setGoodBuy(false);
				}, 2000)

				break;
			}
		}
	}

	// state for alert(goodBuy,removeItem)
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
					<span className="text-xl m-m:text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
					<div className="flex space-x-2">
						<button
							onClick={() => {
								clickHandler('setOrders', { id, name, brand, img, price })
							}}
							className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm p-5 py-2.5 text-center">Add to cart</button>
						<button
							onClick={() => {
								clickHandler('setWishList', { id, name, brand, img, price })
							}}
							className="p-3 py-2.5 border-2 border-green-500 text-green-500 rounded-lg hover:text-white hover:bg-green-500 transition-all duration-200 ">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
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

export default Product