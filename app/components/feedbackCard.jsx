'use client';
import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { FaComment } from 'react-icons/fa';

const FeedbackCard = ({ data }) => {
	const { title, description, upvotes, comments = [], category } = data;

const FeedbackCard = () => {
	return (
		<div className='bg-white py-6 px-6 rounded-lg flex h-[151px] min-w-[689px] items-start text-slate-700 gap-8'>
			<div className=' w-[10%] flex items-center justify-start flex-col '>
				<div className=' bg-blue-50 p-2 flex flex-col justify-center items-center rounded-xl w-fit'>
					<IoIosArrowUp className='text-blue-600' />
					<span className='font-bold'>112</span>
				</div>
			</div>
			<div className='w-[80%]'>
				<h1 className='font-bold text-blue-950 text-lg'>{title}</h1>
				<span className='text-neutral-400'>{description}</span>
				<div className='py-1 px-5 bg-blue-50 rounded-xl w-fit mt-3'>
					<span className='text-blue-600 font-semibold text-sm'>
						{category}
					</span>
				</div>
			</div>
			<div className='w-[10%] h-[100%] flex justify-center items-center text-slate-300 gap-x-2'>
				<FaComment />
				<span className='text-blue-950 font-bold '>{comments.length}</span>
			</div>
		</div>
	);
};

export default FeedbackCard;
