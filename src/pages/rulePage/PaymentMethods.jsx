import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Test from "./Test";

const PaymentMethods = () => {


	return (
		<div className='flex flex-col px-8 md:w-2/3 my-[160px] mx-auto space-y-6'>
			<h3 className='text-5xl'>Payment Methods</h3>

			<ul>
				<li>- Credit / Debit Cards</li>
				<li>- PAYPAL</li>
				<li>- Offline Payments</li>
			</ul>
		</div>
	)
}

export default PaymentMethods