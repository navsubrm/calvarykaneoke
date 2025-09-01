export default {
	backgroundUpperColor: { value: '#d2cbbb', label: '#d2cbbb' },
	backgroundLowerColor: { value: '#271254cc', label: '#271254cc' },
	primaryContent: {
		link: {
			href: '/about',
			label: 'ABOUT JD',
			alt: 'ABOUT JD'
		},
		image: {
			src: '/images/JD_duotone_1.webp'
		}
	},

	asideContent: [
		{
			image: {
				src: '/images/JD_Timer.jpg'
			},
			content:
				'{"styled":{"ops":[{"insert":"Find us on Social"},{"attributes":{"header":4},"insert":"\\n"},{"insert":"Get involved on out social media platforms to view the latest videos, ask questions, and get answers.\\n\\n"},{"attributes":{"align":"right","header":6},"insert":"\\n"}]},"html":"<h4>Find us on Social</h4><p>Get involved on out social media platforms to view the latest videos, ask questions, and get answers.</p><p></p><h6 class=\\"ql-align-right\\"></h6>"}',
			link: {
				href: '/socials',
				label: 'Find us on Social',
				alt: 'Find us on Social'
			}
		},
		{
			image: {
				src: '/images/JD_podcast.jpg'
			},
			content:
				'{"styled":{"ops":[{"insert":"PODCAST: Tune In!"},{"attributes":{"header":4},"insert":"\\n"},{"insert":"\\n"},{"attributes":{"link":"/podcasts"},"insert":"Tune in"},{"insert":" to Pastor J.D.\'s Bible Prophecy Updates and get alerts when new episodes have been published.\\n"},{"attributes":{"align":"right","header":6},"insert":"\\n"}]},"html":"<h4>PODCAST: Tune In!</h4><p></p><p><a href=\\"/podcasts\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">Tune in</a> to Pastor J.D.&#39;s Bible Prophecy Updates and get alerts when new episodes have been published.</p><h6 class=\\"ql-align-right\\"></h6>"}',
			link: {
				href: '/socials',
				label: 'Find us on Social',
				alt: 'Find us on Social'
			}
		}
	]
};
