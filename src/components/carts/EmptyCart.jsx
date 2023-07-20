import { Link } from "react-router-dom"


const EmptyCart = () => {
	return (
		<div className="w-full p-8 md:w-3/5 mx-auto my-0 flex flex-col items-center text-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h:24 md:w-60 md:h-60 mx-auto my-0">
				<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
			</svg>
			<h4 className="text-3xl">Your cart is currently empty!</h4>
			<p className="text-lg mt-4">Before proceed to checkout, you must add some products to your cart.</p>
			<p className="text-lg">You will find a lot of interesting products on our "Shop" page.</p>
			<Link to="/shop" className="uppercase bg-green-500 text-white rounded-xl py-2 px-4 mt-6">go to shop</Link>
		</div>
	)
}

export default EmptyCart