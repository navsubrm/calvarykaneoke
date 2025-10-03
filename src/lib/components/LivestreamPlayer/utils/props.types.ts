interface Livestream {
	title: string;
	src: string;
}

interface Livestreams {
	streams: Livestream[];
}

interface LivestreamForm {
	stream_count: FormDataEntryValue;
	[key: string]: FormDataEntryValue;
}

export type { Livestreams, LivestreamForm };
