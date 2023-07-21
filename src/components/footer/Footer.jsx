import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegram as TelegramIcon, FaFacebook as FacebookIcon, FaInstagram as InstagramIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="bg-white border-t-2">
			<div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div className="md:flex md:justify-between">
					<div className="mb-6 md:mb-0">
						<a href="https://flowbite.com/" className="flex items-center">
							{/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}
							<span className="self-center text-2xl font-semibold whitespace-nowrap">Headphone HUB</span>
						</a>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<a href="#" className="hover:underline">About us</a>
								</li>
								<li>
									<a href="#" className="hover:underline">Contact</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<a href="#" className="hover:underline ">Facebook</a>
								</li>
								<li>
									<a href="#" className="hover:underline">Instragram</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-4">
									<Link to="store-policy" className="hover:underline">Store Policy</Link>
								</li>
								<li className="mb-4">
									<Link to="shipping-and-returns" className="hover:underline">Shipping & Returns</Link>
								</li>
								<li>
									<Link to="payment-methods" className="hover:underline">Payment Methods</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<a href="#" className="text-gray-500 hover:text-gray-900">
							<FacebookIcon className='text-2xl' />
							<span className="sr-only">Facebook page</span>
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-900">
							<InstagramIcon className='text-2xl' />
							<span className="sr-only">Discord community</span>
						</a>
						<a href="#" className="text-gray-500 hover:text-gray-900">
							<TelegramIcon className='text-2xl' />
							<span className="sr-only">Twitter page</span>
						</a>

					</div>
				</div>
			</div>
		</footer>


	)
}

export default Footer