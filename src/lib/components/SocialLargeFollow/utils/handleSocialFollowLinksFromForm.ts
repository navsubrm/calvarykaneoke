export function handleSocialFollowLinksFromForm(formObject: App.FormData) {
	const linkEntries = [];

	for (let i = 0; i < Number(formObject.link_count); i++) {
		if (
			formObject[`social_follow_large_social_links_label_${i}`] &&
			formObject[`social_follow_large_social_links_label_${i}`] !== '' &&
			formObject[`social_follow_large_social_links_href_${i}`] &&
			formObject[`social_follow_large_social_links_href_${i}`] != '' &&
			formObject[`social_follow_large_social_links_alt_${i}`] &&
			formObject[`social_follow_large_social_links_alt_${i}`] != '' &&
			formObject[`social_follow_large_social_links_imgUrl_${i}`] &&
			formObject[`social_follow_large_social_links_imgUrl_${i}`] != ''
		) {
			linkEntries.push({
				label: formObject[`social_follow_large_social_links_label_${i}`],
				href: formObject[`social_follow_large_social_links_href_${i}`],
				alt: formObject[`social_follow_large_social_links_alt_${i}`],
				imgUrl: formObject[`social_follow_large_social_links_imgUrl_${i}`]
			});
		}
	}

	return linkEntries;
}
