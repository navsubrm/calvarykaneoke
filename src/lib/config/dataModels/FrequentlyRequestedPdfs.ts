import SocialFollow from '$lib/components/SocialFollow/utils/model';
import MetaData from '$lib/components/MetaData/utils/model';

export default {
	name: 'frequently-requested-pdfs',
	route: '/frequently-requested-pdfs',
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
		main_content: {
			main: ''
		}
	},
	meta_data: { ...MetaData }
};
