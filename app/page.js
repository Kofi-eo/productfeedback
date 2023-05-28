import Image from 'next/image';
import Link from 'next/link';
import FeedbackCard from './components/feedbackCard';
import fbDataMain from '../public/data.json';
import Header from './components/header';
import { IoEllipse } from 'react-icons/io5';

export default function Home() {
	const categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
	const planned = fbDataMain.productRequests.filter(
		(feedback) => feedback.status === 'planned'
	).length;
	const inProgress = fbDataMain.productRequests.filter(
		(feedback) => feedback.status === 'in-progress'
	).length;
	const Live = fbDataMain.productRequests.filter(
		(feedback) => feedback.status === 'live'
	).length;

	return (
		<main className='text-black flex p-10'>
			<aside className='w-fit flex flex-col gap-8'>
				<div className='h-[187px] w-[355px] bg-gradient-to-tr flex flex-col from-blue-500 to-purple-700 rounded-lg justify-end p-10'>
					<h1 className='font-bold text-white text-2xl'>Frontend Mentor</h1>
					<h2 className=' text-white/50'>Feedback Board</h2>
				</div>
				<div className='h-fit w-[355px] bg-white rounded-lg flex-wrap flex-row gap-3 flex p-8'>
					{categories?.map((category, index) => (
						<button
							key={index}
							className='flex items-center bg-blue-50 w-fit h-fit py-2 px-5 rounded-xl font-bold text-blue-600'
						>
							{category}
						</button>
					))}
				</div>
				<div className='h-fit w-[355px] p-8 flex flex-col gap-y-2 bg-white rounded-lg'>
					{/*Title*/}
					<div className='flex gap-3 justify-between mb-5'>
						<div className='font-bold text-2xl'>Roadmap</div>
						<a className='text-blue-600 underline font-semibold'>View</a>
					</div>
					{/*Planned*/}
					<div className='flex justify-between'>
						<div className='flex items-center  gap-3'>
							<IoEllipse size={10} color='orange' />
							<span className='text-lg font-medium text-neutral-500'>
								Planned
							</span>
						</div>
						<h1 className='font-bold text-lg text-neutral-600'>{planned}</h1>
					</div>
					{/*In-progress*/}
					<div className='flex justify-between'>
						<div className='flex items-center  gap-3'>
							<IoEllipse size={10} color='violet' />
							<span className='text-lg font-medium text-neutral-500'>
								In-Progress
							</span>
						</div>
						<h1 className='font-bold text-lg text-neutral-600'>{inProgress}</h1>
					</div>
					{/*Live*/}
					<div className='flex justify-between'>
						<div className='flex items-center gap-3'>
							<IoEllipse size={10} color='blue' />
							<span className='text-lg font-medium text-neutral-500'>Live</span>
						</div>
						<h1 className='font-bold text-lg text-neutral-600'>{Live}</h1>
					</div>
				</div>
			</aside>
			<div className='w-[70%] flex flex-col h-screen bg-[#F7F8FD] items-center justify-between gap-y-8 '>
				<Header />
				<div className='flex flex-col gap-8 p-2'>
					{fbDataMain?.productRequests.map((feedback, index) => (
						<FeedbackCard key={index} data={feedback} />
					))}
				</div>
			</div>
		</main>
	);
}
