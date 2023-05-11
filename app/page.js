import Image from 'next/image';
import Link from 'next/link';
import feedbackCard from './components/feedbackCard';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400'>
			<feedbackCard />
		</main>
	);
}
