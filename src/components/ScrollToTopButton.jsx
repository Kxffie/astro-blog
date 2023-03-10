import { FiArrowUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return showButton ? (
		<div class='sticky inset-x-0 bottom-0 flex justify-center w-full pb-3 transition'>
			<button class='absolute px-2 py-1 text-lg font-semibold text-white transition-opacity duration-500 ease-in-out origin-bottom rounded-md shadow-lg opacity-100 bottom-3 bg-violet-500 animate-bounce tooltip' data-tip="Scroll To Top" onClick={handleClick}>
				<FiArrowUp size={36} />
			</button>
		</div>
	) : (
		<div class='sticky inset-x-0 bottom-0 flex justify-center w-full pb-3 transition'>
			<button class='absolute px-2 py-1 text-lg font-semibold text-white transition-opacity duration-500 ease-in-out origin-bottom rounded-md shadow-lg opacity-0 bottom-3 bg-violet-500 animate-bounce tooltip' data-tip="Scroll To Top" onClick={handleClick}>
				<FiArrowUp size={36} />
			</button>
		</div>
	);
};

export default ScrollToTopButton;