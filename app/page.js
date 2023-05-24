import Image from 'next/image';
import Link from 'next/link';
import FeedbackCard from './components/feedbackCard';
import fbDataMain from '../public/data.json';
import Header from './components/header';
import NewFeedback from './components/newfeedback';

export default function Home() {
	return (
		<main className='text-black flex p-10'>
			<aside className='w-fit flex flex-col gap-8'>
				<div className='h-[187px] w-[355px] bg-gradient-to-tr from-blue-500 to-purple-700 rounded-lg'></div>
				<div className='h-[187px] w-[355px] bg-white rounded-lg'></div>
				<div className='h-[187px] w-[355px] bg-white rounded-lg'></div>
			</aside>
			<div className='w-[70%] flex flex-col h-screen bg-[#F7F8FD] items-center justify-between gap-y-8 '>
				<Header />
				<div className='flex flex-col gap-8 p-2'>
					{fbDataMain?.productRequests.map((feedback, index) => (
						<FeedbackCard key={index} data={feedback} />
					))}
				</div>
			</div>

			< NewFeedback />
		</main>
	);
}
