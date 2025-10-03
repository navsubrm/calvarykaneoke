import Video from '$lib/components/VideoPlayer/utils/model';
import SocialFooter from '$lib/components/SocialFooter/utils/model';
import MetaData from '$lib/components/MetaData/utils/model';

export default {
	name: 'abc',
	route: '/abc',
	type: 'Page',
	language: 'en-us',
	content: {
		component_height: 100,
		background_image: { url: '/images/ABC_ARTWORK-p-1080.jpeg' },
		background_color: '#82621f',
		gradient_upper: '#5c4d7ca1',
		gradient_middle: '#c7a65e',
		gradient_lower: '#271254cc',
		upper_content: '',
		video: { ...Video },
		lower_content: '',
		abc: { a: '', b: '', c: '' },
		social_footer: { ...SocialFooter }
	},
	meta_data: { ...MetaData }
};
