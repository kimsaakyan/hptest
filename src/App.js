import logo from './logo.svg';
import './App.css';
import MainMenu from './components/menu/MainMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Contact from './components/contact/Contact';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import SingleProduct from './components/singleProduct/SingleProduct';
import FaqPage from './pages/FaqPage';
import PaymentMethods from './pages/rulePage/PaymentMethods';
import ShippingAndReturns from './pages/rulePage/ShippingAndReturns';
import StorePolicy from './pages/rulePage/StorePolicy';
import MyFavouritePage from './pages/MyFavouritePage';
import ScrollToTop from './tools/ScrollToTop'

function App() {
	return (
		<div className="font-['Poppins']">
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path='faq' element={<FaqPage />} />
						<Route path='my-cart' element={<CartPage />} />
						<Route path='my-favourites' element={<MyFavouritePage />} />
						<Route path='my-favourites/:slug' element={<SingleProduct />} />
						<Route path='shop' element={<ShopPage />} />
						<Route path="shop/:slug" element={<SingleProduct />} />
						<Route path="payment-methods" element={<PaymentMethods />} />
						<Route path="shipping-and-returns" element={<ShippingAndReturns />} />
						<Route path="store-policy" element={<StorePolicy />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
