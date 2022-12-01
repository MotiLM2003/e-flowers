import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Layout from 'components/Layout/Layout';
import { motion } from 'framer-motion';
import { Radio, RadioGroup } from '@chakra-ui/react';

// Custom components
import EnvTypes from 'components/Search/EnvTypes';
import FlowersMonths from 'components/Search/FlowersMonths';
import FlowerColors from 'components/Search/FlowerColors';
import Select from 'components/Select/Select';

// Images
import map from 'images/map.png';
import FlowerShape from 'components/FlowerShape/FlowerShape';
import { Input } from '@chakra-ui/react';
import MultipleChoice from 'components/Search/MultipleChoice';
import api from 'apis/userAPI';
import { removeEmptyValues } from 'helpers/generics';

const lifeForm = [
	{ name: 'חד-שנתי', isActive: false },
	{ name: 'גיאופיט (בצל או פקעת)', isActive: false },
	{ name: 'עשבוני רב-שנתי', isActive: false },
	{ name: 'שיח', isActive: false },
	{ name: 'בן-שיח', isActive: false },
	{ name: 'מטפס', isActive: false },
	{ name: 'עץ', isActive: false },
	{ name: 'צמח מים', isActive: false },
	{ name: 'טפיל', isActive: false },
	{ name: 'שרכים', isActive: false },
	{ name: 'דו-שנתי', isActive: false },
	{ name: 'טחבים', isActive: false },
];

const growAreas = [
	{ name: 'חולות', isActive: false },
	{ name: 'בתות', isActive: false },
	{ name: 'בתות של הרים גבוהים', isActive: false },
	{ name: 'חברות שיחים', isActive: false },
	{ name: 'קרקעות כבדות', isActive: false },
	{ name: 'בתי גידול לחים', isActive: false },
	{ name: 'מדבר', isActive: false },
	{ name: 'מחשופי סלע קשה', isActive: false },
	{ name: 'קירות וחומות', isActive: false },
	{ name: 'סביבות חמות - צמחים אוהבי חום', isActive: false },
	{ name: 'קרקעות מלוחות', isActive: false },
	{ name: 'חורש', isActive: false },
	{ name: 'בתה עשבונית ים-תיכונית', isActive: false },
	{ name: 'נטע אדם', isActive: false },
	{ name: 'שטחים מופרים', isActive: false },
	{ name: 'שדות ושטחים מעובדים', isActive: false },
	{ name: 'יער', isActive: false },
	{ name: 'חוף הים התיכון', isActive: false },
	{ name: 'קרקעות עשירות בנוטריינטים', isActive: false },
	{ name: 'מחשופי סלע מוצלים', isActive: false },
	{ name: 'יער ספר הררי', isActive: false },
	{ name: 'בתות טרגקנטיות של הרים גבוהים', isActive: false },
];

const leafShapeList = [
	{ name: 'עגול', isActive: false },
	{ name: 'מצולע', isActive: false },
	{ name: 'חסר גבעול', isActive: false },
	{ name: 'מרובע', isActive: false },
	{ name: 'משולש', isActive: false },
];

const kozim = [
	{ name: 'ענפים', isActive: false },
	{ name: 'עלים', isActive: false },
	{ name: 'גבעולים', isActive: false },
	{ name: 'פירות', isActive: false },
	{ name: 'פרחים', isActive: false },
];

import tempImage from 'images/temp-ai-flower.png';
import Link from 'next/link';
import Loader from 'components/Loader/Loader';
import { ISearchResult, IState } from 'helpers/interfaces';
import SearchCard from 'components/Search/SearchCard/SearchCard';

// Main component
const Search = () => {
	const [value, setValue] = React.useState<string>('1');
	const [searchResults, setSearchResults] = React.useState<
		ISearchResult[] | null
	>(null);

	const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

	const [state, setState] = useState<IState>({
		name_text: '',
		colors: [],
		location_names: [],
		flowering_seasons: [],
		petals: [],
		leaf_shapes: [],
		leaf_edges: [],
		leaf_arrangements: [],
		life_forms: [],
		habitats: [],
		stem_shapes: [],
		spine: [],
		red: false,
		invasive: false,
		danger: false,
		rare: false,
		protected: false,
		page: 1,
	});

	const onChange = <T,>(name: string, value: T) => {
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

	const onLifeFormChanged = (value: string, isIn: boolean) => {
		if (!isIn) {
			setState({
				...state,
				life_forms: state.life_forms.filter((x) => x !== value),
			});
		} else {
			const newForm: string[] = [...state.life_forms];
			newForm.push(value);
			setState({ ...state, life_forms: newForm });
		}
	};

	const onHabitatsChanged = (value: string, isIn: boolean) => {
		if (!isIn) {
			setState({
				...state,
				habitats: state.habitats.filter((x) => x !== value),
			});
		} else {
			const newForm: string[] = [...state.habitats];
			newForm.push(value);
			setState({ ...state, habitats: newForm });
		}
	};

	const onSteamShapeChanged = (value: string, isIn: boolean) => {
		const newForm: string[] = [value];
		setState({ ...state, stem_shapes: newForm });
	};

	const onSpineChanged = (value: string, isIn: boolean) => {
		if (!isIn) {
			setState({ ...state, spine: state.spine.filter((x) => x !== value) });
		} else {
			const newForm: string[] = [...state.spine];
			newForm.push(value);
			setState({ ...state, spine: newForm });
		}
	};

	const onShapeChange = (value: string, isIn: boolean) => {
		if (!isIn) {
			setState({
				...state,
				leaf_shapes: state.leaf_shapes.filter((x) => x !== value),
			});
		} else {
			const leafShape: string[] = [...state.leaf_shapes];
			leafShape.push(value);
			setState({ ...state, leaf_shapes: leafShape });
		}
	};

	const onArrangementChange = (value: string, isIn: boolean) => {
		if (!isIn) {
			setState({
				...state,
				leaf_arrangements: state.leaf_arrangements.filter((x) => x !== value),
			});
		} else {
			const leafShape: string[] = [...state.leaf_arrangements];
			leafShape.push(value);
			setState({ ...state, leaf_arrangements: leafShape });
		}
	};

	const onEdgesChange = (value: string, isIn: boolean) => {
		if (!isIn) {
			setState({
				...state,
				leaf_arrangements: state.leaf_arrangements.filter((x) => x !== value),
			});
		} else {
			const leafShape: string[] = [...state.leaf_arrangements];
			leafShape.push(value);
			setState({ ...state, leaf_arrangements: leafShape });
		}
	};

	const submitForm = async () => {
		console.log('state', state);
		try {
			setIsSubmitting(true);
			const values = removeEmptyValues(state);
			console.log('values', values);
			const { data } = await api.post('/search', values);
			console.log('success:', data);
			setIsSubmitting(false);
			setSearchResults(data.plants);
		} catch (err: any) {
			const error = err.data;
			console.log(error);
			setIsSubmitting(false);
		}
	};

	return (
		<Layout>
			<>
				<Loader text='טוען תוצאות חיפוש...' isLoading={isSubmitting} />
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
							<div className='flex flex-col md:gap-5  md:flex-row mt-5 w-full '>
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
										<div className='w-full text-center'>
											<p
												className='font-bold text-secondary text-center  border-b-4 border-b-primary mb-2 text-md   
										'
											>
												צורות חיים
											</p>
											<MultipleChoice
												list={lifeForm}
												onChange={onLifeFormChanged}
											/>
											<p
												className='font-bold text-secondary text-center  border-b-4 border-b-primary my-2 text-md   
										'
											>
												צורות גבעול
											</p>
											<MultipleChoice
												list={leafShapeList}
												onChange={onSteamShapeChanged}
												isSingSelection={true}
											/>
											<p
												className='font-bold text-secondary text-center  border-b-4 border-b-primary my-2 text-md   
										'
											>
												קוצים
											</p>
											<MultipleChoice list={kozim} onChange={onSpineChanged} />
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
										<p className='font-bold text-secondary  border-b-4 border-b-primary mb-2 text-md  text-center  md:w-[60%] '>
											בית גידול
										</p>
										<MultipleChoice
											list={growAreas}
											onChange={onHabitatsChanged}
										/>
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
										<FlowerShape
											startIngIndex={0}
											onShapeChange={onShapeChange}
										/>
										<p className='font-bold text-secondary    my-3 text-sm  text-center  '>
											סידור עלים
										</p>
										<FlowerShape
											startIngIndex={4}
											onShapeChange={onArrangementChange}
										/>

										<p className='font-bold text-secondary    my-3 text-sm  text-center  '>
											סידור עלים
										</p>
										<FlowerShape
											startIngIndex={5}
											onShapeChange={onShapeChange}
										/>
									</div>
								</div>
							</div>
						</div>

						<div className='w-[90%] md:w-[30%] md:hover:w-[30%]  mt-1 md:mt-[3rem] rounded transition-all duration-500'>
							<button
								className='bg-transparent  border-2 border-primary hover:border-transparent  hover:bg-primary blur-[2px]  hover:blur-[0px] text-gray-400 hover:text-white font-bold  p-2 w-full rounded-xl  transition duration-1000'
								onClick={submitForm}
							>
								התחל חיפוש
							</button>
						</div>
						{/* <input
            accept='image/*'
            id='icon-button-file'
            type='file'
            capture='environment'
          /> */}
					</div>
					<div>
						<div className='flex flex-wrap gap-1 sm:gap-2 md:gap-4 justify-center mt-10'>
							{searchResults &&
								searchResults?.map((item, index) => {
									return (
										// <Link key={item.heb_name} href='/'>
										// 	<div className='flex flex-col mb-5 cursor-pointer group'>
										// 		<div className='flex items-end gap-1 mb-2'>
										// 			<span className='font-bold text-primary text-xl'>
										// 				{currentId}
										// 			</span>
										// 			<p className='font-bold text-secondary text-sm border-2  border-white border-b-secondary pb-[.5px8'>
										// 				{item.heb_name}
										// 			</p>
										// 		</div>
										// 		<div className='relative h-[100px] w-[100px] '>
										// 			<Image
										// 				src={`https://storage.googleapis.com/ef-prod/plants-images/thumbnails/${item.image}`}
										// 				layout='fill'
										// 				width={100}
										// 				height={100}
										// 				alt={`${item.heb_name}`}
										// 				className='rounded-xl '
										// 			/>
										// 		</div>
										// 	</div>
										// </Link>
										<SearchCard key={item.heb_name} item={item} />
									);
								})}
						</div>
					</div>
				</div>
			</>
		</Layout>
	);
};

export default Search;
