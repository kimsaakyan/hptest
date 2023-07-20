// import photos
import headphone1 from '../../images/headphones/headphone1.jpg';
import headphone2 from '../../images/headphones/headphone2.jpg';
import headphone3 from '../../images/headphones/headphone3.jpg';




import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/styleForSwiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function ShowCaseSwiper() {

	const photosForMainCarousel = [headphone1, headphone2, headphone3];

	return (
		<>
			<Swiper
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}

				pagination={{
					dynamicBullets: true,
				}}
				speed={1000}
				loop={true}
				modules={[Pagination, Autoplay]}
				className="mySwiper"
			>
				{photosForMainCarousel.map((photo) => {
					return <SwiperSlide><img src={photo} /></SwiperSlide>
				})}
			</Swiper>
		</>
	);
}
