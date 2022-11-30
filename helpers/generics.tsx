import { IState } from './interfaces';

export const removeEmptyValues = (state: IState) => {
	let searchResults = {};
	for (let item in state) {
		let currentITem = item as keyof typeof state;
		if (currentITem?.length && currentITem.length > 0) {
			searchResults = { ...searchResults, [item]: currentITem };
		}
	}
	return searchResults;
};
