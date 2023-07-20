import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterGoods } from '../../redux/slices/headphonesSlice';
import { motion } from 'framer-motion';

const Filter = (props) => {
	const dispatch = useDispatch();

	const filteredHeadphones = useSelector((state) => state.headphones.filteredHeadphones);

	const { filterIsOpen, setFilterIsOpen } = props;

	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');

	const [brand, setBrand] = useState('');

	const formRef = useRef(null);

	const handlePriceChange = (newValue, pointer) => {
		switch (pointer) {
			case 'minPrice': {
				setMinPrice(newValue);
				break;
			}
			case 'maxPrice': {
				setMaxPrice(newValue);
				break;
			}
		}
	};

	const handleBrandChange = (newValue) => {
		setBrand(newValue);
	};

	const applyFilters = () => {
		dispatch(filterGoods({
			minPrice, maxPrice, brand
		}));
	};

	const handleReset = (e) => {
		// formRef.current.reset();
		// setMinPrice('')
		// setMaxPrice('')


		// e.preventDefault()
	};


	return (
		<div
			className="fixed top-0 left-0 w-full h-full z-100 bg-filterBaground">
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: 320 }}
				exit={{ width: 0 }}
				className="overflow-hidden bg-white h-full flex flex-col justify-between py-8 absolute z-80">
				<div className="text-center">

					<button className="" onClick={() => { setFilterIsOpen(!filterIsOpen) }}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div>
					<div className="p-8">
						<label for="prices" className="block mb-2 text-sm font-medium text-gray-900">Select a price</label>
						<div className='flex items-center'>
							<input
								value={minPrice}
								onChange={(event) => { handlePriceChange(event.target.value, 'minPrice') }}
								type="number" placeholder="Min price" className="border-2 border-black py-2 px-3 w-28" />
							<span>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
								</svg>

							</span>
							<input
								value={maxPrice}
								onChange={(event) => { handlePriceChange(event.target.value, 'maxPrice') }}
								type="number" placeholder="Max price" className="border-2 border-black py-2 px-3 w-28" />
						</div>
					</div>
					<div className="p-8">
						<label htmlFor="sizes" className="block mb-2 text-sm font-medium text-gray-900">Select a brand</label>
						<select onChange={(e) => { handleBrandChange(e.target.value) }} id="size" className="bg-white border border-black text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
							<option value='all' selected>All brands</option>
							<option value="Brand A">Brand A</option>
							<option value="Brand B">Brand B</option>
							<option value="Brand C">Brand C</option>
						</select>
					</div>
					<div className="p-8">
						<label htmlFor="colors" className="block mb-2 text-sm font-medium text-gray-900">Select a color</label>
						<select id="color" className="bg-white border border-black text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
							<option value="all" selected>Choose a color</option>
							<option value="white">White</option>
							<option value="black">Black</option>
							<option value="colorful">Colorful</option>
						</select>
					</div>
				</div>

				<div className="flex justify-between px-8">
					<button
						onClick={() => {
							applyFilters()
							setFilterIsOpen(!filterIsOpen)
						}}
						className="uppercase border-2 border-black p-1">View results <span className="inline-block border-2 border-black px-2 ml-2">{filteredHeadphones.length}</span></button>
					<button type='reset'
						className="uppercase"
					// onClick={() => {  }}
					>Clear</button>
					{/* <input type='reset' value='reset' /> */}
				</div>

			</motion.div>
		</div>
	)
}

export default Filter