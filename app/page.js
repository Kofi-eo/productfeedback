import Image from 'next/image';
import Link from 'next/link';
import FeedbackCard from './components/feedbackCard';
import fbDataMain from '../public/data.json';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 bg-[#F7F8FD] gap-8'>
			{fbDataMain?.productRequests.map((feedback, index) => (
				<FeedbackCard key={index} data={feedback} />
			))}
		</main>
	);
}
