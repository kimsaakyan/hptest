import { motion } from "framer-motion"

const SuccessfullyRemoved = () => {
	return (
		<motion.div
			initial={{ x: -1000, opacity: 0 }}
			animate={{ x: 20, opacity: 1 }}
			exit={{ x: -1000, opacity: 0 }}
			className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 fixed bottom-0 left-0" role="alert">
			<span className="font-medium">Successfully Removed!</span>
		</motion.div>
	)
}

export default SuccessfullyRemoved