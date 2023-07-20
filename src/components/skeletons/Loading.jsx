const Loading = () => {
	return (
		<div className="text-6xl flex items-center justify-center space-x-2">
			<div className="w-[50px] h-[50px] rounded-full animate-pulse bg-violet-400"></div>
			<div className="w-[50px] h-[50px] rounded-full animate-pulse bg-violet-400"></div>
			<div className="w-[50px] h-[50px] rounded-full animate-pulse bg-violet-400"></div>
		</div>
	);
};

export default Loading;
