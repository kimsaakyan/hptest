import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BurgerMenu from "./BurgerMenu";
import { toggleCart } from "../../redux/slices/cartSlice"
import MiniCart from "../carts/MiniCart";
import { motion, AnimatePresence } from "framer-motion";
import headphoneLogo from '../../images/logo/headphoneLogo.png';
import ScrollUpBtn from "../alert/ScrollUpBtn";




const MainMenu = () => {

	const dispatch = useDispatch();

	//new version scrollink menu
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		setScrolled(window.scrollY > 20);
	};

	useEffect(() => {
		// Добавляем обработчик прокрутки при монтировании компонента
		window.addEventListener('scroll', handleScroll);

		// Убираем обработчик прокрутки при размонтировании компонента
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const mainMenuVariant = {
		from: {
			boxShadow: 'none'
		},
		to: {
			boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
		},
	}


	// state for open and close burger menu
	const [burgerIsOpen, setBurgerIsOpen] = useState(false);

	//state for cart open
	const cartIsOpen = useSelector((state) => state.cart.cartIsOpen);

	const clickHandler = () => {
		dispatch((toggleCart(!cartIsOpen)));
	}

	// orders quantity for cart badgets
	const orders = useSelector((state) => state.cart.orders);
	const wishList = useSelector((state) => state.wishList.wishList);


	return (

		<>
			<motion.div
				variants={mainMenuVariant}
				initial={scrolled ? 'to' : 'from'}
				animate={scrolled ? 'to' : 'from'}
				transition={{ duration: 1 }}
				className={`w-full fixed left-0 top-0 text-lg bg-white py-4`}>
				<div className='hidden spase-2 px-8 md:flex justify-between items-center text-xl'>
					{/* left part part menu */}
					<div className="">
						<ul className="flex space-x-3">
							<li><NavLink to="." className="transition-all duration-300 hover:text-green-500">Home</NavLink></li>
							<li><NavLink to="faq" className="transition-all duration-300 hover:text-green-500">FAQ</NavLink></li>
							<li><NavLink to="shop" className="transition-all duration-300 hover:text-green-500">Shop</NavLink></li>
						</ul>
					</div>

					{/* center part menu: logo */}
					<div className="">
						{/* <a href="#">Headphone Hub</a> */}
						<img className="w-[80px]" src={headphoneLogo} />
					</div>

					{/* right part menu */}
					<div className="">
						<ul className="flex space-x-6 items-center">
							<li>
								<div class="flex items-center justify-center bg-white">
									<div class="relative scale-75">
										<Link to="my-favourites">
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
												<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
											</svg>
										</Link>
										{wishList.length ? <span class="absolute -top-2 left-4 rounded-full bg-green-500 p-0.5 px-2 text-sm text-red-50">{wishList.length}</span> : ''}
									</div>
								</div>
							</li>
							<li onClick={clickHandler} className="cursor-pointer">
								<div class="flex items-center justify-center bg-white">
									<div class="relative scale-75">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="h-8 w-8 text-black">
											<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
										</svg>
										{orders.length ? <span class="absolute -top-2 left-4 rounded-full bg-green-500 p-0.5 px-2 text-sm text-red-50">{orders.length}</span> : ''}
									</div>
								</div>

								{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
								</svg> */}
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
								</svg>
							</li>
						</ul>
					</div>
				</div>

				{/* menu mobile version */}
				<div class="md:hidden flex justify-between items-center px-2">
					<h3 className="font-semibold">
						<img className="w-[80px]" src={headphoneLogo} />
					</h3>
					<button className="" onClick={() => { setBurgerIsOpen(!burgerIsOpen) }}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
				</div>
				<AnimatePresence>
					{burgerIsOpen && <BurgerMenu burgerIsOpen={burgerIsOpen} setBurgerIsOpen={setBurgerIsOpen} />}
				</AnimatePresence>
			</motion.div >
			<AnimatePresence>
				{cartIsOpen && <MiniCart />}
				{scrolled && <ScrollUpBtn />}
			</AnimatePresence>
		</>

	)
}

export default MainMenu