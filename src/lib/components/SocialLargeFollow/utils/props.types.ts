interface SocialItem {
	label: string;
	href: string;
	alt: string;
	imgUrl: string;
	location: string;
	type: string;
}

export interface Props {
	data?: {
		main: {
			brightness: number;
			grey_scale: number;
			size: number;
		};
		social_links: SocialItem[];
	};
}
