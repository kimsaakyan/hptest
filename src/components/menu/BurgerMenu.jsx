import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const BurgerMenu = (props) => {
	const { burgerIsOpen, setBurgerIsOpen } = props;

	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
			className="flex flex-col fixed top-0 left-0 w-full h-screen bg-white text-5xl z-30">
			<div className='flex justify-between items-center px-4 py-4'>
				<NavLink to="." className="hover:text-red-500 text-2xl" onClick={() => { setBurgerIsOpen(!burgerIsOpen) }}>Headphone HUB</NavLink>
				<button onClick={() => { setBurgerIsOpen(!burgerIsOpen) }} className='inline-block'>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div className="flex flex-col space-y-6 mx-auto mt-16 text-4xl">
				<div className=""><NavLink to="shop" className="" onClick={() => { setBurgerIsOpen(!burgerIsOpen) }}>Shop</NavLink></div >
				<div className=""><NavLink to="about" className="" onClick={() => { setBurgerIsOpen(!burgerIsOpen) }}>About</NavLink></div>
				<div className=""><NavLink to="faq" className="" onClick={() => { setBurgerIsOpen(!burgerIsOpen) }}>FAQ</NavLink></div>
				<div className=""><NavLink to="contacts" className="" onClick={() => { setBurgerIsOpen(!burgerIsOpen) }}>Contacts</NavLink></div>
				<div className=""><NavLink to="my-cart" className="" onClick={() => { setBurgerIsOpen(!burgerIsOpen) }}>My Cart</NavLink></div>
			</div>
		</motion.div>

	)
}

export default BurgerMenu