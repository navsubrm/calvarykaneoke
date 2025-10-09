import MetaData from '$lib/components/MetaData/utils/model';
import AboutChurch from '$lib/components/AboutChurch/utils/model';

const languageLinks = {
	main: {
		brightness: 1,
		grey_scale: 0,
		size: 65
	},
	social_links: [
		{
			label: 'Dutch - Nederlands',
			href: 'http://www-jdfarag-org.translate.goog/translations?_x_tr_sl=auto&_x_tr_tl=nl&_x_tr_hl=en&_x_tr_pto=wapp',
			alt: 'You Tube',
			imgUrl: '/images/netherlands-holland-svgrepo-com.svg'
		},
		{
			label: 'French - Français',
			href: 'https://www-jdfarag-org.translate.goog/translations?_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp',
			alt: 'Français',
			imgUrl: '/images/flag-for-france-svgrepo-com.svg'
		},
		{
			label: 'German - Deutsch',
			href: 'https://www-jdfarag-org.translate.goog/translations?_x_tr_sl=auto&_x_tr_tl=de&_x_tr_hl=en&_x_tr_pto=wapp',
			alt: 'Français',
			imgUrl: '/images/flag-for-germany-svgrepo-com.svg'
		},
		{
			label: 'Japanese - 日本語',
			href: 'https://www-jdfarag-org.translate.goog/translations?_x_tr_sl=auto&_x_tr_tl=ja&_x_tr_hl=en&_x_tr_pto=wapp',
			alt: '日本語',
			imgUrl: '/images/japan-svgrepo-com.svg'
		},
		{
			label: 'Portuguese - Português',
			href: 'https://www-jdfarag-org.translate.goog/translations?_x_tr_sl=auto&_x_tr_tl=pt-PT&_x_tr_hl=en&_x_tr_pto=wapp',
			alt: 'Português',
			imgUrl: '/images/flag-for-portugal-svgrepo-com.svg'
		},
		{
			label: 'Romanian - Română',
			href: 'https://www-jdfarag-org.translate.goog/translations?_x_tr_sl=auto&_x_tr_tl=ro&_x_tr_hl=en&_x_tr_pto=wapp',
			alt: 'Română',
			imgUrl: '/images/flag-for-portugal-svgrepo-com.svg'
		},
		{
			label: 'Spanish - Español',
			href: 'https://www-jdfarag-org.translate.goog/translations?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=en&_x_tr_pto=wapp',
			alt: 'Español',
			imgUrl: '/images/flag-for-spain-svgrepo-com.svg'
		}
	]
};

export default {
	name: 'translations',
	route: '/translations',
	type: 'Page',
	language: 'en',
	content: {
		component_height: 100,
		background: {
			upper: '#d2cbbb',
			base: '#d2cbbb',
			lower: '#271254cc'
		},
		button: {
			label: '',
			href: ''
		},
		content: {
			upper: '',
			lower: ''
		},
		social_follow_large: { ...languageLinks }
	},
	meta_data: { ...MetaData }
};
