import { motion } from 'framer-motion';

const ScrollUpBtn = () => {
	return (
		<motion.button
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
			onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
			className="fixed bottom-0 right-0 bg-green-500 m-4 rounded-full p-2 text-white"
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
				<path fillRule="evenodd" d="M12 20.25a.75.75 0 01-.75-.75V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V19.5a.75.75 0 01-.75.75z" clipRule="evenodd" />
			</svg>


		</motion.button>
	)
}

export default ScrollUpBtn