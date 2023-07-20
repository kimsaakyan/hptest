import topImg from '../../images/headphones-keyboard.jpg';
import bottomImg from '../../images/bottom-background.png'
import asianGirl from '../../images/imgForBoxes/portrait-asian-girl.jpg'
import man from '../../images/imgForBoxes/man.jpg'
import dreamyGirl from '../../images/imgForBoxes/dreamy-girl.jpg'
import africanGirl from '../../images/imgForBoxes/african-girl.jpg';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';



const Home = () => {

	const refObject = {
		block1: useRef(null),
		block2: useRef(null),
		block3: useRef(null),
		block4: useRef(null)
	}


	const isInViewBlock1 = useInView(refObject.block1, { once: true });
	const isInViewBlock2 = useInView(refObject.block2, { once: true });
	const isInViewBlock3 = useInView(refObject.block3, { once: true });
	const isInViewBlock4 = useInView(refObject.block4, { once: true });

	useEffect(() => {
		console.log("Element is in view: ", isInViewBlock1, isInViewBlock2, isInViewBlock3, isInViewBlock4)
	}, [isInViewBlock1, isInViewBlock2, isInViewBlock3, isInViewBlock4])


	const boxAnimation = {
		from: {
			scale: 0.5,
			opacity: 0,
		},
		to: {
			scale: 1,
			opacity: 1,
		}
	}

	// state for skeletong (Loading)
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(!loading);
		}, 4000)

	}, [loading])

	return (
		<div className="flex flex-col items-center text-mainColor">
			<div className="mb-[30px] text-center space-y-2 px-6">
				<h1 className="text-4xl sm-s:text-6xl md:text-7xl lg:text-8xl font-semibold">Hear it. Feel it</h1>
				<p className="text-lg sm-s:text-xl md:text-2xl font-extralight">Headphones that make you forget everything around you</p>
			</div>

			<div className=''>
				<img src={topImg} className='' />
			</div>

			<div className="flex flex-col items-center mt-[30px] lg:p-8">
				<h2 className="text-2xl sm-s:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-[20px] text-center px-6 font-medium">Why are our headphones the best?</h2>
				<div className="flex flex-wrap justify-center font-light md:w-[920px]">
					<motion.div
						ref={refObject.block1}
						variants={boxAnimation}
						initial={isInViewBlock1 ? 'to' : 'from'}
						animate={isInViewBlock1 ? 'to' : 'from'}
						transition={{ duration: 0.5 }}
						className='md:w-boxWidth m-8 space-y-2 rounded-lg shadow-lg'
					>
						<img src={asianGirl} className='rounded-t-lg' />
						<div className='px-4 pb-4 text-secondMainColor'>
							<h3 className='font-semibold'>Superior Sound Quality</h3>
							<p>Our headphones offer exceptional audio reproduction. You'll enjoy crisp, high-quality sound with deep bass that immerses you in the unique sonic world of your favorite music.</p>
						</div>
					</motion.div>
					<motion.div
						ref={refObject.block2}
						variants={boxAnimation}
						initial={isInViewBlock2 ? 'to' : 'from'}
						animate={isInViewBlock2 ? 'to' : 'from'}
						transition={{ duration: 0.5 }}
						className='md:w-boxWidth m-8 space-y-2 rounded-lg shadow-lg'
					>
						<img src={man} className='rounded-t-lg' />
						<div className='px-4 pb-4 text-secondMainColor'>
							<h3 className='font-semibold'>Comfort and Convenience</h3>
							<p>We care about your comfort. Our headphones provide the perfect blend of style and comfort with plush ear cushions and an adjustable headband. You can enjoy music for extended periods without discomfort.</p>
						</div>
					</motion.div>
					<motion.div
						ref={refObject.block3}
						variants={boxAnimation}
						initial={isInViewBlock3 ? 'to' : 'from'}
						animate={isInViewBlock3 ? 'to' : 'from'}
						transition={{ duration: 0.5 }}
						className='md:w-boxWidth m-8 space-y-2 rounded-lg shadow-lg' >
						<img src={africanGirl} className='rounded-t-lg' />
						<div className='px-4 pb-4 text-secondMainColor'>
							<h3 className='font-semibold'>Durability and Longevity</h3>
							<p>We use only high-quality materials and reliable components to ensure the longevity of our headphones. You can trust that they will serve you for a long time and be reliable companions on your musical journey.</p>
						</div>
					</motion.div>
					<motion.div
						ref={refObject.block4}
						variants={boxAnimation}
						initial={isInViewBlock4 ? 'to' : 'from'}
						animate={isInViewBlock4 ? 'to' : 'from'}
						transition={{ duration: 0.5 }}
						className='md:w-boxWidth m-8 space-y-2 rounded-lg shadow-lg'>
						<img src={dreamyGirl} className='rounded-t-lg' />
						<div className='px-4 pb-4 text-secondMainColor'>
							<h3 className='font-semibold'>Features and Controls</h3>
							<p className=''>Refers to additional features and controls offered by the headphones, such as in-line microphone, playback controls, voice assistant integration, and customizable settings.</p>
						</div>
					</motion.div>
				</div>
			</div>

			{/* bottom part */}
			<motion.div
				className='flex flex-wrap px-8 mb-10' data-aos="zoom-in">
				<img
					src={bottomImg} className='sm-s:w-8/12 sm:w-1/2' />
				<div
					className='sm-s:w-4/12 sm:w-1/2 flex flex-col justify-center items-start border shadow-lg sm-s:shadow-none sm-s:border-none px-2 sm-s:px-0 rounded-lg'>
					<h2 className='font-semibold text-[20px] mt-2 sm:text-[32px] md:text-[42px] lg:text-[56px] mb-2'>Your Soundtrack, Your Way</h2>
					<p className='font-extralight sm:text-[18px] md:text-[20px] mb-2'>Personalize Your Audio Journey with Our Premium Headphones!</p>
					<Link to='/shop' className='text-center uppercase font-semibold bg-green-500 py-3 px-6 text-white w-full mb-[16px] rounded-lg md:mt-[40px] md:w-1/2'>Go to Shop</Link>
				</div>
			</motion.div>

		</div >
	)
}

export default Home