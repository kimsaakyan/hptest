import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {

	const [openId, setOpenId] = useState(null);

	const clickHandler = (id) => {
		setOpenId(id === openId ? null : id);
	};

	const [faqs, setFaqs] = useState([
		{
			id: 1,
			question: 'How i can play for my appoinment?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?'
		},
		{
			id: 2,
			question: 'Is the cost of the appoinment covered by private health insurance?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?'
		},
		{
			id: 3,
			question: 'Do i need a referral?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?'
		},
		{
			id: 4,
			question: 'What are your opening house?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?'
		},
		{
			id: 5,
			question: 'What can i expect at my first consultation?',
			answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?'
		},
	]);


	return (
		<div className="">
			<h3 className="text-[72px] text-center mb-6">FAQ</h3>
			<div className='flex flex-col items-center px-4 space-y-8'>
				{faqs.map((faq) => {
					return (
						<>
							<div onClick={() => { clickHandler(faq.id) }} className="text-lg font-semibold cursor-pointer border-2 w-full md:w-9/12 p-[30px] rounded-lg flex justify-between">
								<p>{faq.question}</p>
								<div>
									{openId === faq.id ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
										<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z" clipRule="evenodd" />
									</svg>) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
										<path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
									</svg>)
									}
								</div>
							</div>
							<AnimatePresence>
								{openId === faq.id && <motion.p
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									exit={{ scale: 0, opacity: 0 }}
									// transition={{ duration: 0.5 }}
									className="overflow-hidden w-full md:w-9/12 p-[30px] rounded-lg my-0 mx-auto cursor-default">{faq.answer}</motion.p>}
							</AnimatePresence>
						</>
					)
				})}
			</div>
		</div>
	)
}

export default FAQ