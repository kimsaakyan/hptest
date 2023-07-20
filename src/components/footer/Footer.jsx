import { AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegram as TelegramIcon, FaFacebook as FacebookIcon, FaInstagram as InstagramIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer class="bg-white border-t-2">
			<div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
				<div class="md:flex md:justify-between">
					<div class="mb-6 md:mb-0">
						<a href="https://flowbite.com/" class="flex items-center">
							{/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" /> */}
							<span class="self-center text-2xl font-semibold whitespace-nowrap">Headphone HUB</span>
						</a>
					</div>
					<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
						<div>
							<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
							<ul class="text-gray-500 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<a href="#" class="hover:underline">About us</a>
								</li>
								<li>
									<a href="#" class="hover:underline">Contact</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
							<ul class="text-gray-500 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<a href="#" class="hover:underline ">Facebook</a>
								</li>
								<li>
									<a href="#" class="hover:underline">Instragram</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
							<ul class="text-gray-500 dark:text-gray-400 font-medium">
								<li class="mb-4">
									<Link to="store-policy" class="hover:underline">Store Policy</Link>
								</li>
								<li class="mb-4">
									<Link to="shipping-and-returns" class="hover:underline">Shipping & Returns</Link>
								</li>
								<li>
									<Link to="payment-methods" class="hover:underline">Payment Methods</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
						<a href="#" class="text-gray-500 hover:text-gray-900">
							<FacebookIcon className='text-2xl' />
							<span class="sr-only">Facebook page</span>
						</a>
						<a href="#" class="text-gray-500 hover:text-gray-900">
							<InstagramIcon className='text-2xl' />
							<span class="sr-only">Discord community</span>
						</a>
						<a href="#" class="text-gray-500 hover:text-gray-900">
							<TelegramIcon className='text-2xl' />
							<span class="sr-only">Twitter page</span>
						</a>

					</div>
				</div>
			</div>
		</footer>


	)
}

export default Footer