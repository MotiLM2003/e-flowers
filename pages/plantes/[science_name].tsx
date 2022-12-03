/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import api from 'apis/serverAPI';
import { IPlantDetails } from 'helpers/interfaces';
import Image from 'next/image';
import Layout from 'components/Layout/Layout';
import { monthsText } from 'helpers/globalObjects';
import { globalColors } from 'helpers/globalObjects';
import link from 'images/link.png';
import heart from 'images/heart.svg';
import map from 'images/map-demo.png';

import {
	leafArrangements,
	leafEdges,
	leafShapes,
} from 'helpers/flowersShapeObjects';

interface Props {
	data: IPlantDetails;
}

const createArrayString = (arr: string[]): string => {
	return arr.toString();
};

const getColors = (color: string): string => {
	let newColor: string | undefined = globalColors?.find(
		(x) => x.name === color
	)?.color;

	if (newColor === undefined) newColor = '#fff';
	return newColor;
};

const getEnvironmentSavingText = (p: IPlantDetails): string => {
	let text = '';
	if (p.danger) text = 'בסכנה';
	if (p.protected) {
		if (text.length > 0) {
			text = text + ', מוגן';
		} else {
			text = text + 'מוגן';
		}
	}
	if (p.invasive) {
		if (text.length > 0) {
			text = text + ', פולשני';
		} else {
			text = text + 'פולשני';
		}
	}
	if (p.red) {
		if (text.length > 0) {
			text = text + ',אדום';
		} else {
			text = text + 'אדום';
		}
	}
	if (p.red) {
		if (text.length > 0) {
			text = text + ',נדיר';
		} else {
			text = text + 'נדיר';
		}
	}

	return text.length === 0 ? '-- אין מידע --' : text;
};
const PlanetDetails = ({ data }: Props) => {
	const [planet, setPlanet] = useState(data);
	console.log(planet);
	const image = data.images[0].file_name;
	const firstMonth: number = planet.flowering_seasons[0] - 1;
	const lastMonth: number =
		planet.flowering_seasons[planet.flowering_seasons.length - 1] - 1;
	console.log(lastMonth);
	const monthsString =
		planet.flowering_seasons.length > 1
			? `${monthsText[firstMonth]} - ${monthsText[lastMonth]}`
			: `${monthsText[planet.flowering_seasons[0]]}`;
	return (
		<Layout>
			<div className='default-container lg:px-2'>
				<div className='flex justify-center mt-5  md:mt-20'>
					<p className='font-bold text-secondary  border-b-4 border-b-orange-300 mb-9 text-2xl '>
						{data.heb_name}
					</p>
				</div>

				<div className='flex'>
					<div className='basis-1/2 md:mr-[3rem]'>
						<div className='h-[350px] w-[450px] '>
							<img
								src={`https://storage.googleapis.com/ef-prod/plants-images/images/${image}`}
								className='object-cover rounded-2xl w-full'
								alt='some alt'
							/>
						</div>
						<div className='flex gap-2 '>
							<div className='h-[120px] w-[120px]'>
								<img
									src={`https://storage.googleapis.com/ef-prod/plants-images/thumbnails/4A2ZR29A85TA9QN.jpg`}
									className='object-cover rounded-2xl w-full'
									alt='some alt'
								/>
							</div>
							<div className='h-[120px] w-[120px] rounded-2xl '>
								<img
									src={`https://storage.googleapis.com/ef-prod/plants-images/thumbnails/8T7M690R8WKUQCD.jpg`}
									className='object-cover rounded-2xl w-full h-[90px]'
									alt='some alt'
								/>
							</div>
							<div className='h-[120px] w-[120px]'>
								<img
									src={`https://storage.googleapis.com/ef-prod/plants-images/thumbnails/HE367JPJGE445WV.jpg`}
									className='object-cover rounded-2xl w-full'
									alt='some alt'
								/>
							</div>
						</div>
						<div className='flex items-center gap-[13rem] '>
							<div className='text-secondary text-sm'>צילום: רוני רוני</div>

							<div className='flex gap-3 flex-row-reverse items-center justify-center'>
								<div className='relative h-[16px] w-[16px] cursor-pointer'>
									<Image
										objectFit='contain'
										layout='fill'
										src={link}
										alt='example '
									/>
								</div>
								<div className='flex gap-1 flex-row-reverse items-center cursor-pointer'>
									<div className='relative h-[16px] w-[16px] flex'>
										<Image
											objectFit='contain'
											layout='fill'
											src={heart}
											alt='example '
										/>
									</div>
									<p className='text-xs text-gray-400'>322</p>
								</div>
								<p className='text-xs text-gray-400'>22.10.22</p>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-3'>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>משפחה</div>
							<div>{planet.taxon.family}</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>שם לטיני</div>
							<div>{planet.science_name}</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>צורות חיים</div>
							<div>{createArrayString(planet.life_forms)}</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>בית גידול עיקרי</div>
							<div>{createArrayString(planet.habitats)}</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>חודשי פריחה</div>
							<div>{monthsString}</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>צבעי פרח</div>
							<div>
								<div className='flex gap-1 '>
									{planet.colors?.map((color) => {
										const bgColor = getColors(color);

										return (
											<div
												key={color}
												className={`rounded-full w-[14px] h-[14px] border border-gray-700 '`}
												style={{ backgroundColor: `${bgColor}` }}
											>
												&nbsp;
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>מספר עלה כותרת</div>
							<div>{planet.petals}</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>קוצניות</div>
							<div>
								{planet.spine.length > 0
									? createArrayString(planet.spine)
									: 'ללא קוצים'}
							</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>שמירת טבע</div>
							<div>{getEnvironmentSavingText(planet)}</div>
						</div>
						<div className='flex items-center gap-10 text-secondary'>
							<div className='font-bold min-w-[8.6rem]'>שמורת נרדפים</div>
							<div>{createArrayString(planet.synonym_names_heb)}</div>
						</div>
					</div>
				</div>

				<main className='mt-[2rem] text-secondary'>
					<article>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						<br /> Doloremque voluptas distinctio nostrum aliquid itaque, ipsa
						omnis, rerum harum nihil provident, impedit
						<br /> recusandae necessitatibus! Incidunt ducimus reprehenderit
						similique delectus amet blanditiis.
						<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
						quasi
						<br /> assumenda, alias, nisi dolorum, tempora repellat veniam
						quisquam cum. dolores officia facilis. Odio neque at, odit facere
						soluta reprehenderit quae?
						<br />
						<br />
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						<br /> Doloremque voluptas distinctio nostrum aliquid itaque, ipsa
						omnis, rerum harum nihil provident, impedit
						<br /> recusandae necessitatibus! Incidunt ducimus reprehenderit
						similique delectus amet blanditiis.
						<br />
						<br />
						<br />
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						<br /> Doloremque voluptas distinctio nostrum aliquid itaque, ipsa
						omnis, rerum harum nihil provident, impedit
						<br />
					</article>
					<div className='flex items-center my-10 gap-5'>
						<div>
							<Image
								src={map}
								objectFit='contain'
								width={136}
								height={323}
								alt='Map Image'
							/>
						</div>
						<div className='flex flex-col self-start gap-3'>
							<div className='flex gap-2'>
								<span className='font-bold '>אזור הצפון: </span>
								<p>שאר הישוב, דפנה, כרימאל</p>
							</div>
							<div className='flex gap-2'>
								<span className='font-bold '>אזור המרכז: </span>
								<p>הוד השרון, כפרס סבא</p>
							</div>
							<div className='flex gap-2'>
								<span className='font-bold '>אזור הדרום: </span>
								<p>נאות סמדר, באר שבע והסביבה</p>
							</div>
						</div>
					</div>
					<div>
						<div className='flex justify-center mt-5  md:mt-20'>
							<p className='font-bold text-secondary  border-b-4 border-b-orange-300 mb-9 text-2xl '>
								חודשי פריחה
							</p>
						</div>
						<div className='flex justify-center gap-2  '>
							<div className='flex justify-center gap-2 flex-wrap w-[480px] '>
								{monthsText.map((month, index) => {
									return (
										<div
											key={month}
											className={`border  p-3 rounded-xl text-xs 
											 ${
													planet.flowering_seasons.includes(index + 1)
														? 'bg-primary text-white'
														: 'border-secondary'
												}
											 w-[72px] text-center`}
										>
											<div className='flex flex-col  justify-center items-center'>
												<div>{month}</div>
												<div className='font-bold'>{index + 1}</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div>
						<div className='flex justify-center mt-5  md:mt-20'>
							<p className='font-bold text-secondary  border-b-4 border-b-orange-300 mb-9 text-2xl '>
								עלים
							</p>
						</div>
						<div className='flex flex-col items-center gap-5 font-bold justify-center mb-6'>
							<p>צורה</p>
							<div className='flex flex-wrap justify-center gap-2  w-[480px]'>
								{leafShapes.map((shape, index) => {
									return (
										<div
											key={index}
											className={`border  ${
												shape.isActive
													? 'border-primary border-2'
													: 'border-gray-400'
											} p-[3px] rounded-xl cursor-pointer transition duration-300 `}
										>
											<Image
												src={shape.image}
												objectFit='contain'
												width={50}
												height={50}
												alt='Map Image'
											/>
										</div>
									);
								})}
							</div>
						</div>
						<div className='flex flex-col items-center gap-2 font-bold justify-center mb-6'>
							<p>שפה</p>
							<div className='flex flex-wrap justify-center gap-2  w-[480px]'>
								{leafEdges.map((shape, index) => {
									return (
										<div
											key={index}
											className={`border  ${
												shape.isActive
													? 'border-primary border-2'
													: 'border-gray-400'
											} p-[3px] rounded-xl cursor-pointer transition duration-300 `}
										>
											<Image
												src={shape.image}
												objectFit='contain'
												width={50}
												height={50}
												alt='Map Image'
											/>
										</div>
									);
								})}
							</div>
						</div>
						<div className='flex flex-col items-center gap-2 font-bold justify-center mb-6'>
							<p>סידור</p>
							<div className='flex flex-wrap justify-center gap-2  w-[480px]'>
								{leafArrangements.map((shape, index) => {
									return (
										<div
											key={index}
											className={`border  ${
												shape.isActive
													? 'border-primary border-2'
													: 'border-gray-400'
											} p-[3px] rounded-xl cursor-pointer transition duration-300 `}
										>
											<Image
												src={shape.image}
												objectFit='contain'
												width={50}
												height={50}
												alt='Map Image'
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</main>
			</div>
		</Layout>
	);
};

export default PlanetDetails;

export async function getServerSideProps({ query }: any) {
	const science_name: IPlantDetails = query.science_name;
	console.log(science_name);
	try {
		const { data } = await api.get(`/plants/${science_name}`);
		return {
			props: {
				data: data,
			}, // will be passed to the page component as props
		};
	} catch (err) {
		console.log(err);
	}
}
