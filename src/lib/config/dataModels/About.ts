import AboutMain from '$lib/components/AboutMain/utils/model';
import AboutImage from '$lib/components/AboutImage/utils/model';
import AboutChurch from '$lib/components/AboutChurch/utils/model';
import SocialFollow from '$lib/components/SocialFollow/utils/model';
import SocialFooter from '$lib/components/SocialFooter/utils/model';
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
		about_main: { ...AboutMain },
		about_image: { ...AboutImage },
		social_follow: { ...SocialFollow },
		about_church: { ...AboutChurch },
		lower_content: '',
		social_footer: { ...SocialFooter }
	},
	meta_data: { ...MetaData }
};
