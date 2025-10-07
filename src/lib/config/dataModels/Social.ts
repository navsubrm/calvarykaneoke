import MetaData from '$lib/components/MetaData/utils/model';
import SocialFollowLarge from '$lib/components/SocialLargeFollow/utils/model';
import AboutChurch from '$lib/components/AboutChurch/utils/model';

export default {
	name: 'social',
	route: '/social',
	type: 'Page',
	language: 'en',
	content: {
		component_height: 100,
		background: {
			upper: '#d2cbbb',
			base: '#d2cbbb',
			lower: '#271254cc'
		},
		about_church: { ...AboutChurch },
		content: {
			upper: '',
			lower: ''
		},
		social_follow_large: { ...SocialFollowLarge }
	},
	meta_data: { ...MetaData }
};
