import Hero from '$lib/components/Hero/utils/model';
import LargeImage from '$lib/components/LargeImageLink/utils/model';
import DualContent from '$lib/components/DualContent/utils/model';
import TriImage from '$lib/components/TriPicture/utils/model';
import MetaData from '$lib/components/MetaData/utils/model';

export default {
	name: 'Home',
	route: '/',
	type: 'Page',
	language: 'en-us',
	content: {
		hero: { ...Hero },
		large_image: { ...LargeImage },
		dual_content: { ...DualContent },
		tri_image: { ...TriImage }
	},
	meta_data: { ...MetaData }
};
