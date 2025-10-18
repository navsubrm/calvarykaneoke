import SocialFooter from '$lib/components/SocialFooter/utils/model';
import MetaData from '$lib/components/MetaData/utils/model';

export default {
	name: 'exemption',
	route: '/exemption',
	type: 'Page',
	language: 'en',
	content: {
		component_height: 100,
		background: {
			upper: '#d2cbbb',
			base: '#d2cbbb',
			lower: '#271254cc'
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
