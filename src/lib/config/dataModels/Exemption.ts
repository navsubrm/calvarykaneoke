import SocialFooter from '$lib/components/SocialFooter/utils/model';
import MetaData from '$lib/components/MetaData/utils/model';

export default {
	name: 'exemption',
	route: '/exemption',
	type: 'Page',
	language: 'en',
	content: {
		component_height: 100,
		background_color: {
			base: '',
			upper: '',
			lower: ''
		},
		general_content: {
			upper: '',
			middle: '',
			lower: ''
		},
		button: {
			label: '',
			href: ''
		},
		social_footer: { ...SocialFooter }
	},
	meta_data: { ...MetaData }
};
