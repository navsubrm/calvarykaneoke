import hero from '$lib/components/Hero/utils/testData';
import sermonImage from '$lib/components/CurrentSermonLink/utils/testData';
import wideContent from '$lib/components/WideSpacedContent/utils/testData';
import footer from '$lib/components/Footer/utils/testData';
import triPicture from '$lib/components/TriPicture/utils/testData';

export async function load() {
	return {
		hero,
		sermonImage,
		wideContent,
		triPicture,
		footer
	};
}
