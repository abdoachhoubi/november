import React, { useState, useEffect } from 'react';
import video from './assets/videos/video.mp4';


const Countdown: React.FC = () => {
	const calculateTimeLeft = () => {
		const now = new Date();
		const targetDate = new Date('2024-11-02T00:00:00');
		const difference = targetDate.getTime() - now.getTime();

		let timeLeft = {
			months: 0,
			days: 0,
			hours: 0,
		};

		if (difference > 0) {
			timeLeft = {
				months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30)),
				days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div className='countdown'>
			<h1>Countdown to my 24th birthday</h1>
			<div className='counter'>
				<p>{timeLeft.months} <span>months</span></p><span>:</span>
				<p>{timeLeft.days} <span>days</span></p><span>:</span>
				<p>{timeLeft.hours} <span>hours</span></p>
			</div>
		</div>
	);
};


function App() {
	return (
		<>
			<video playsInline loop muted autoPlay className='video'>
				<source src={video} type="video/mp4" />
			</video>
			<main className="home">
				<h1 className='heading'>Meet Astro</h1>
				<h2 className='subheading'>Born in November, owns <a className='link' href="https://november.ma">November</a></h2>
				<Countdown />
			</main>
		</>
	);
}

export default App;
