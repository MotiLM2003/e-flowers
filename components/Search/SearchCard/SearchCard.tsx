/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { ISearchResult } from 'helpers/interfaces';
import { globalColors } from 'helpers/globalObjects';
import PageLinesIcon from 'components/Icons/PageLinesIcon';
import FlaskIcon from 'components/Icons/flaskIcon';

interface Props {
	item: ISearchResult;
}

const SearchCard = ({ item }: Props) => {
	useEffect(() => {
		document.addEventListener('DOMContentLoaded', function (event) {
			const images = document.querySelectorAll('img');
			console.log('images', images);
			images.forEach(function (img) {
				img.onerror = function () {
					this.style.display = 'none';
				};
			});
		});
	}, []);
	return (
		<div
			className='flex flex-col   w-full sm:w-[20rem]  px-2 py-5 my-4
          bg-white rounded-xl transform transition-all hover:-translate-y-2 shadow hover:shadow-xl
          duration-300 '
		>
			<img
				src={`https://storage.googleapis.com/ef-prod/plants-images/thumbnails/${item.image}`}
				className='h-40 object-cover rounded-xl w-full'
				alt=''
			/>
			<div className='p-2 flex flex-col justify-center gap-2'>
				<div className='flex items-center gap-4'>
					<PageLinesIcon size={20} color={'#0f4871'} />
					<h2 className='font-bold text-lg text-primary'>{item.heb_name}</h2>
				</div>
				<div className='flex items-center gap-4'>
					<FlaskIcon size={20} color={'#0f4871'} />
					<p className='text-sm  text-secondary font-bold'>
						שם מדעי:<span className=''>&nbsp;{item.science_name}</span>
					</p>
				</div>
			</div>
			<div className='mt-2 self-center'>
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
