//import hero from '$lib/components/Hero/utils/testData';
import sermonImage from '$lib/components/CurrentSermonLink/utils/testData';
import wideContent from '$lib/components/WideSpacedContent/utils/testData';
import footer from '$lib/components/Footer/utils/testData';
import triPicture from '$lib/components/TriPicture/utils/testData';
//import * as Page from '$lib/server/pageCRUD.js';
import * as Hero from '$lib/server/heroCRUD.js';

export async function load({ platform }) {
	//const page = await Page.queryNewestRecordByPage(platform, 'home');
	const hero = await Hero.queryNewestRecordByPage(platform, 'home');

	console.log('Hero from page: ', hero);

	return {
		hero,
		sermonImage,
		wideContent,
		triPicture,
		footer
	};
}
