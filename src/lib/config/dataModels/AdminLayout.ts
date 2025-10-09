import Footer from '$lib/components/Footer/utils/model';
import Header from '$lib/components/Header/utils/model';

export default {
	header: { ...Header, logo_link_href: '/admin' },
	footer: { ...Footer },
	links: [
		{
			label: 'Prophesy',
			href: '/prophecy-updates',
			alt: 'Prophecy Updates',
			imgUrl: '',
			location: 'footer-link',
			type: 'link'
		},
		{
			label: 'Calvary Kaneohe',
			href: '/admin',
			alt: 'Calvary Kaneohe',
			imgUrl: '',
			location: 'footer-link',
			type: 'link'
		},
		{
			label: 'Live',
			href: '/admin/live',
			alt: 'Live Service',
			imgUrl: '',
			location: 'header',
			type: 'link'
		},
		{
			label: 'Prophecy & Sermons',
			href: '',
			alt: 'Prophecy & Sermons',
			imgUrl: '',
			location: 'header',
			type: 'menu',
			subMenu: [
				{
					label: 'Recent Services',
					href: '/recent-services',
					alt: 'Recent Services',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'Prophecy Vids',
					href: '/prophecy-vids',
					alt: 'Prophecy Vids',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'Bible Sermons',
					href: '/bible-sermons',
					alt: 'Bible Sermons',
					imgUrl: '',
					location: '',
					type: 'link'
				}
			]
		},
		{
			label: "ABC's",
			href: '/admin/abc',
			alt: "ABC's",
			imgUrl: '',
			location: 'header',
			type: 'link'
		},
		{
			label: 'Exemption',
			href: '/admin/exemption',
			alt: 'Exemption',
			imgUrl: '',
			location: 'header',
			type: 'link'
		},
		{
			label: 'Resources',
			href: '',
			alt: 'Resources',
			imgUrl: '',
			location: 'header',
			type: 'menu',
			subMenu: [
				{
					label: 'Service Times',
					href: 'https://support.jdfarag.org/hc/en-us/articles/44120768115091-Service-Time-and-Location-Information',
					alt: 'Service Times',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'Social',
					href: '/admin/social',
					alt: 'Social',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'Podcasts',
					href: '/podcasts',
					alt: 'Podcasts',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'About',
					href: '/admin/about',
					alt: 'About',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'Support',
					href: 'https://support.jdfarag.org/hc/en-us',
					alt: 'Support',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'Apps',
					href: 'https://subsplash.com/calvarychapelkaneohe/app',
					alt: 'Apps',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'Translations',
					href: '/admin/translations',
					alt: 'Translations',
					imgUrl: '',
					location: '',
					type: 'link'
				},
				{
					label: 'Frequently Requested PDFs',
					href: '/frequently-requested-pdfs',
					alt: 'Frequently Requested PDFs',
					imgUrl: '',
					location: '',
					type: 'link'
				}
			]
		}
	]
};
