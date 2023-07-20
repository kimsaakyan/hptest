import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import headphoneBanner from "../../images/headphone-banner.jpg"


import Product from "./product/Product";
import Filter from "../filter/Filter";


const Products = () => {

	const headphones = useSelector((state) => state.headphones.headphones);
	const filteredHeadphones = useSelector((state) => state.headphones.filteredHeadphones);

	// state for open and close filter component
	const [filterIsOpen, setFilterIsOpen] = useState(false);


	console.log(headphones)

	return (

		<div className="flex flex-col items-center gap-4">
			<h3 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl">Shop with Us</h3>
			<div className='' >
				<img className="md:w-[700px]" src={headphoneBanner} />
			</div>
			<div className="text-white">
				<button
					onClick={() => { setFilterIsOpen(!filterIsOpen) }}
					className="uppercase bg-green-500 px-9 py-2 hover:bg-green-700 transition-all duration-500 tracking-wider"
				>Filters</button>
			</div>

			<AnimatePresence>
				{filterIsOpen && <Filter filterIsOpen={filterIsOpen} setFilterIsOpen={setFilterIsOpen} />}
			</AnimatePresence>

			<div className="px-6 flex flex-wrap gap-10 justify-center">
				{filteredHeadphones.map((headphone) => {
					return <Product key={headphone.id} {...headphone} />
				})}
			</div>
		</div>
	)
}

export default Products