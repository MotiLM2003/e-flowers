import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from '../../components/Layout/Layout';
import { motion } from 'framer-motion';
import { Radio, RadioGroup } from '@chakra-ui/react';

// Custom components
import EnvTypes from '../../components/Search/EnvTypes';
import FlowersMonths from '../../components/Search/FlowersMonths';
import FlowerColors from '../../components/Search/FlowerColors';
import Select from '../../components/Select/Select';

// Images
import map from '../../images/map.png';
import FlowerShape from './FlowerShape';
import { Input } from '@chakra-ui/react';

const lifeForm = [
	'חד-שנתי',
	'גיאופיט (בצל או פקעת)',
	'עשבוני רב-שנתי',
	'שיח',
	'בן-שיח',
	'מטפס',
	'עץ',
	'צמח מים',
	'טפיל',
	'שרכים',
	'דו-שנתי',
	'טחבים',
];

const growAreas = [
	'חולות',
	'קרקעות קלות',
	'בתות',
	'בתות של הרים גבוהים',
	'חברות שיחים',
	'ערבות-שיחים',
	'קרקעות כבדות',
	'בתי גידול לחים',
	'מדבר',
	'מחשופי סלע קשה',
	'קירות וחומות',
	'סביבות חמות - צמחים אוהבי חום',
	'קרקעות מלוחות',
	'חורש',
	'בתה עשבונית ים-תיכונית',
	'נטע אדם',
	'שטחים מופרים',
	'שדות ושטחים מעובדים',
	'יער',
	'חוף הים התיכון',
	'קרקעות עשירות בנוטריינטים',
	'מחשופי סלע מוצלים',
	'יער ספר הררי',
	'בתות טרגקנטיות של הרים גבוהים',
];

const leafShapeList = ['עגול', 'מצולע', 'חסר גבעול', 'מרובע', 'משולש'];

const kozim = ['ענפים', 'עלים', 'גבעולים', 'פירות', 'פרחים'];

interface IState {
	name_text: string;
	colors: string[];
	location_names: string[];
	flowering_seasons: string[];
	petals: string[];
	leaf_shapes: string[];
	leaf_edges: string[];
	leaf_arrangements: string[];
	life_forms: string[];
	habitats: string[];
	stem_shapes: string[];
	spine: string[];
	red: boolean;
	invasive: boolean;
	danger: boolean;
	rare: boolean;
	protected: boolean;
	page: number;
}

// Main component
const Search = () => {
	const [value, setValue] = React.useState('1');
	const [state, setState] = useState<IState>({
		name_text: '',
		colors: [],
		location_names: [],
		flowering_seasons: [],
		petals: ['חסר עלי כותרת'],
		leaf_shapes: ['פשוט'],
		leaf_edges: ['תמימה'],
		leaf_arrangements: ['מסורגים (עלה אחד בכל מפרק)'],
		life_forms: ['חד-שנתי'],
		habitats: ['חולות'],
		stem_shapes: ['עגול'],
		spine: ['ענפים'],
		red: false,
		invasive: false,
		danger: false,
		rare: false,
		protected: false,
		page: 1,
	});

	const onChange = (name: string, value: any) => {
		setState({ ...state, [name]: value });
		console.log(name);
	};

	const onMonthChange = (month: string, isIn: boolean) => {
		if (!isIn) {
			setState({
				...state,
				flowering_seasons: state.flowering_seasons.filter((x) => x !== month),
			});
		} else {
			const months: string[] = [...state.flowering_seasons];
			months.push(month);
			setState({ ...state, flowering_seasons: months });
		}
	};

	const onColorChange = (color: string, isIn: boolean) => {
		if (!isIn) {
			setState({ ...state, colors: state.colors.filter((x) => x !== color) });
		} else {
			const colors: string[] = [...state.colors];
			colors.push(color);
			setState({ ...state, colors: colors });
		}
	};

	return (
		<Layout>
			<div className='default-container'>
				<div className='flex flex-col justify-center items-center'>
					<div className='flex items-center justify-center my-5'>
						<p className='font-bold text-secondary  border-b-4  border-b-primary mb-7 text-2xl  w-[320px] text-center '>
							חיפוש צמח לפי מאפיינים
						</p>
					</div>

					<div className='flex flex-col items-center'>
						<div className='w-[90%] md:w-[50%]'>
							<p className='text-secondary mb-2 font-bold text-md'>
								חיפוש לפי שם צמח
							</p>
							<div className='w-full'>
								<Input
									placeholder='הקלד שם צמח'
									value={state.name_text}
									onChange={(e) => {
										onChange('name_text', e.target.value);
									}}
								/>
							</div>
						</div>
						{/* main container */}
						<div className='flex flex-col md:gap-5  md:flex-row mt-5 w-full'>
							<div className='grow-1'>
								<div className='flex flex-col items-center justify-center my-5'>
									<p className='font-bold text-secondary  border-b-4 border-b-primary mb-5 text-md  text-center  md:w-[60%] '>
										שמירת טבע
									</p>
									<div>
										<EnvTypes state={state} onChange={onChange} />
									</div>
									<div>
										<Image
											src={map}
											objectFit='contain'
											width={300}
											height={300}
											alt='Map Image'
										/>
									</div>
									<div className='w-full'>
										<Select>
											<>
												<option>צורת חיים</option>
												{lifeForm.map((item) => {
													return (
														<option key={item} value={item}>
															{item}
														</option>
													);
												})}
											</>
										</Select>
									</div>
								</div>
							</div>
							<div className='grow-2 flex flex-col items-center'>
								<div className='flex items-center justify-center my-5 w-full'>
									<p className='font-bold text-secondary  border-b-4 border-b-primary text-md  text-center   md:w-[60%]  '>
										פריחה
									</p>
								</div>

								<FlowersMonths onMonthChange={onMonthChange} />

								<p className='font-bold text-secondary text-sm  text-center   md:w-[60%]  md:mt-8 mb-3'>
									צבע פריחה
								</p>
								<div className='w-full flex flex-col items-center justify-center'>
									<FlowerColors onColorChange={onColorChange} />
									<p className='font-bold text-secondary mt-3 mb-2 text-sm  text-center  md:w-[60%] '>
										מספר עלי כותרת
									</p>
									<div className='mb-[3.2rem]'>
										<RadioGroup
											onChange={setValue}
											value={value}
											className='search-rb'
										>
											<div className='flex flex-reverse  max-w-[180px] justify-center gap-3'>
												<div>
													<Radio size='sm' colorScheme='orange' value='1'>
														1
													</Radio>
												</div>
												<div>
													<Radio size='sm' colorScheme='orange' value='2'>
														2
													</Radio>
												</div>
												<div>
													<Radio size='sm' colorScheme='orange' value='3'>
														3
													</Radio>
												</div>
												<div>
													<Radio size='sm' colorScheme='orange' value='4'>
														4
													</Radio>
												</div>
												<div>
													<Radio size='sm' colorScheme='orange' value='5'>
														5
													</Radio>
												</div>
											</div>
										</RadioGroup>
									</div>
									<Select>
										<>
											<option>בית גידול</option>
											{growAreas.map((item) => {
												return (
													<option key={item} value={item}>
														{item}
													</option>
												);
											})}
										</>
									</Select>
									<div style={{ direction: 'ltr' }} className='text-xs'>
										<pre>{JSON.stringify(state, null, 2)}</pre>
									</div>
								</div>
							</div>
							<div className='grow-1'>
								<div className='flex flex-col items-center justify-center my-5'>
									<p className='font-bold text-secondary  border-b-4 border-b-primary mb-7 text-md  text-center  '>
										תכונות ומבנה
									</p>
									<p className='font-bold text-secondary    mb-3 text-sm  text-center  '>
										צורות עלה
									</p>
									<FlowerShape startIngIndex={0} />
									<p className='font-bold text-secondary    my-3 text-sm  text-center  '>
										סידור עלים
									</p>
									<FlowerShape startIngIndex={4} />
									<p className='font-bold text-secondary    my-3 text-sm  text-center  '>
										סידור עלים
									</p>
									<FlowerShape startIngIndex={5} />
									<Select cssClass='mt-8'>
										<>
											<option>צורת גבעול</option>
											{leafShapeList.map((item) => {
												return (
													<option key={item} value={item}>
														{item}
													</option>
												);
											})}
										</>
									</Select>
									<Select cssClass='mt-10'>
										<>
											<option>קוצים</option>
											{kozim.map((item) => {
												return (
													<option key={item} value={item}>
														{item}
													</option>
												);
											})}
										</>
									</Select>
								</div>
							</div>
						</div>
					</div>

					<div className='w-[90%] md:w-[30%] md:hover:w-[33%]  mt-1 md:mt-[3rem] rounded transition-all duration-500'>
						<button className='bg-green p-2 w-full rounded hover:bg-dark-green hover:text-white  transition duration-1000'>
							חיפוש{' '}
						</button>
					</div>
					{/* <input
            accept='image/*'
            id='icon-button-file'
            type='file'
            capture='environment'
          /> */}
				</div>
			</div>
		</Layout>
	);
};

export default Search;
