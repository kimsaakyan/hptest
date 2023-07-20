import { motion } from "framer-motion"

const Test = () => {
	return (
		<motion.div
			initial={{ height: 0, opacity: 0 }}
			animate={{ height: 'auto', opacity: 1 }}
			exit={{ height: 0, opacity: 0 }}
		>
			Voluptate cum alias ducimus tempora optio aperiam rerum labore aliquid quibusdam
			! Repellat provident tempora vero recusandae nulla et eum in corporis velit!
		</motion.div>
	)
}

export default Test

