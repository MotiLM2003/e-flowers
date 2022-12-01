/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ISearchResult } from 'helpers/interfaces';
import { globalColors } from 'helpers/globalObjects';

interface Props {
	item: ISearchResult;
}

const SearchCard = ({ item }: Props) => {
	return (
		<div
			className='flex flex-col items-center  w-full sm:w-[20rem]  px-2 py-5 my-4
          bg-white rounded-xl transform transition-all hover:-translate-y-2 shadow hover:shadow-xl
          duration-300 '
		>
			<img
				src={`https://storage.googleapis.com/ef-prod/plants-images/thumbnails/${item.image}`}
				className='h-40 object-cover rounded-xl w-full'
				alt=''
			/>
			<div className='p-2'>
				<h2 className='font-bold text-lg text-primary'>{item.heb_name}</h2>
				<p className='text-sm  text-secondary'>שם מדעי: {item.science_name}</p>
			</div>
			<div className='mt-2'>
				<a
					role='button'
					href='#'
					className='text-white transform transition-all duration-300  bg-gradient-to-t from-[#FFA500] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFA500] px-3 py-1 rounded-md '
				>
					בקר בדף הצמח
				</a>
			</div>
		</div>
	);
};

export default SearchCard;
