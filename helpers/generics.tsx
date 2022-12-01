import { IState } from './interfaces';

export const removeEmptyValues = (state: IState) => {
	console.log(state);
	let searchResults = {};
	let item: keyof typeof state;

	Object.entries(state).forEach(([key, value]) => {
		if (typeof value === 'object') {
			if (value.length > 0) {
				searchResults = { ...searchResults, [key]: value };
			}
		}
	});

	return searchResults;
};
