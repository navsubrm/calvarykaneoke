/** @param {string|null} test */
export const isJson = (test) => {
	try {
		if (!test || test == '') return false;
		JSON.parse(test);
		return true;
	} catch (err) {
		return false;
	}
};

export default isJson;
