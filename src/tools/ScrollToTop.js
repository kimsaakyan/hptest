import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const location = useLocation();

	useEffect(() => {
		const scrollToTop = () => {
			window.scrollTo(0, 0);
		};

		scrollToTop(); 

		return () => {
		
		};
	}, [location]);

	return null;
};

export default ScrollToTop;
