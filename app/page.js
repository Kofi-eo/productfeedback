import Image from 'next/image';
import Link from 'next/link';
import FeedbackCard from './components/feedbackCard';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 bg-[#F7F8FD]'>
			<FeedbackCard />
		</main>
	);
}
