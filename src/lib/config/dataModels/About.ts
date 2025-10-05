import AboutMain from '$lib/components/AboutMain/utils/model';

import SocialFooter from '$lib/components/SocialFooter/utils/model';
import MetaData from '$lib/components/MetaData/utils/model';

export default {
	name: 'exemption',
	route: '/exemption',
	type: 'Page',
	language: 'en',
	content: {
		about_main: { ...AboutMain },
		social_footer: { ...SocialFooter },
		background: {
			upper: '#d2cbbb',
			base: '#d2cbbb',
			lower: '#271254cc'
		}
	},
	meta_data: { ...MetaData }
};
