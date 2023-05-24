import React from 'react';
import { IoBulb } from 'react-icons/io5';

const Header = () => {
	return (
		<div className='bg-slate-700  py-6 px-6 rounded-lg flex h-[81px] min-w-[689px]  items-center justify-between text-white gap-8'>
			<div className='flex items-center text-white gap-8'>
				<IoBulb />

				<h1>6 Suggestions</h1>
				<div className='flex gap-2'>
					<span className='text-neutral-400'>Sort by: </span>
					<select className='bg-slate-700 text-white'>
						<option value='Most Upvotes'>Most Upvotes</option>
						<option value='Least Upvotes'>Least Upvotes</option>
					</select>
				</div>
			</div>
			<button className='bg-violet-600 py-3 px-6 rounded-md'>
				<span className=' font-bold '>+ Add Feedback</span>
			</button>
		</div>
	);
};

export default Header;
