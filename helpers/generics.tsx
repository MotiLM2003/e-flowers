import { IState } from './interfaces';

export const removeEmptyValues = (state: IState) => {
	console.log(state);
	let searchResults = {};
	for (let item in state) {
		if (state[item]?.length && state[item].length > 0) {
			searchResults = { ...searchResults, [item]: state[item] };
		}
	}

	console.log('results', searchResults);

	return searchResults;
};
