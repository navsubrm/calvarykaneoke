import SocialFollow from '$lib/components/SocialFollow/utils/model';
import MetaData from '$lib/components/MetaData/utils/model';

export default {
	name: 'about',
	route: '/about',
	type: 'Page',
	language: 'en',
	content: {
		component_height: 100,
		background: {
			upper: '#d2cbbb',
			base: '#d2cbbb',
			lower: '#271254cc'
		},
		social_follow: { ...SocialFollow },
		lower_content: ''
	},
	meta_data: { ...MetaData }
};
