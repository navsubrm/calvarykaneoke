export function handleStreamsFromForm(formObject: App.FormData) {
	const streamEntries = [];

	console.log(formObject.stream_count);

	for (let i = 0; i < Number(formObject.stream_count); i++) {
		if (
			formObject[`streams_title_${i}`] &&
			formObject[`streams_title_${i}`] != '' &&
			formObject[`streams_src_${i}`] &&
			formObject[`streams_src_${i}`] != ''
		) {
			streamEntries.push({
				title: formObject[`streams_title_${i}`],
				src: formObject[`streams_src_${i}`]
			});
		}
	}

	return streamEntries;
}
