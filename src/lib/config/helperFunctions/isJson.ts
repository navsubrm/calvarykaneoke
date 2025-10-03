/** @param {string|null} test */
export const isJson = (test) => {
	try {
		if (!test || test == '') return false;
		JSON.parse(test);
		return true;
	} catch (err) {
		console.log('Error from JSON check.', err);
		return false;
	}
};

export default isJson;
