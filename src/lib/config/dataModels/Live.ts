import SocialFooter from '$lib/components/SocialFooter/utils/model';
import MetaData from '$lib/components/MetaData/utils/model';

export default {
	name: 'live',
	route: '/live',
	type: 'Page',
	language: 'en-us',
	content: {
		component_height: 150,
		background_color: '#d2cbbbe6',
		gradient_upper: '#d2cbbbe6',
		gradient_lower: '#271254cc',
		streams: [{ title: '', src: '' }],
		general_content: '',
		social_footer: { ...SocialFooter }
	},
	meta_data: { ...MetaData }
};
