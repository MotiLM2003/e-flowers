export interface IState {
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

export interface ISearchResult {
	colors: [];
	commoness: string;
	heb_name: string;
	image: string;
	science_name: string;
}

export interface IPlantDetails {
	plant_id: string;
	science_name: string;
	heb_name: string;
	fam_name_eng: null;
	petals: string;
	leaf_shapes: [];
	leaf_edges: [];
	leaf_arrangements: [];
	stem_shapes: string;
	life_forms: [];
	description: string | null;
	protected: boolean;
	red: boolean;
	invasive: boolean;
	synonym_names_eng: [];
	synonym_names_heb: [];
	locations: [
		{
			location_name: string;
			commoness: string;
		},
		{
			location_name: string;
			commoness: string;
		},
		{
			location_name: string;
			commoness: string;
		},
		{
			location_name: string;
			commoness: string;
		},
		{
			location_name: string;
			commoness: string;
		},
		{
			location_name: string;
			commoness: string;
		}
	];
	habitats: string[];
	flowering_seasons: number[];
	colors: string[];
	sex_flower: string[];
	danger: boolean;
	rare: boolean;
	taxon: {
		clade1: string | null;
		clade2: string | null;
		clade3: string | null;
		clade4: string | null;
		family: string | null;
		subfamily: string | null;
		genus: string | null;
	};
	spine: [];
	images: [
		{
			author_name: string;
			licenses: string[];
			what_inside: [];
			image_date: null;
			location: [];
			general_description: string;
			specific_description: null;
			source_url: string;
			source_url_page: string;
			level: string;
			file_name: string;
		}
	];
}
