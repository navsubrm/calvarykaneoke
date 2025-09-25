export async function getAllRoutes() {
	const modules = import.meta.glob('/src/routes/**/+page.svelte');
	const routes = Object.keys(modules).map((path) => {
		let route = path.replace('/src/routes', '').replace('/+page.svelte', '');
		if (route === '') route = '/';
		route = route.replace(/\[(\w+)\]/g, ':$1');
		return route;
	});

	const newRoutes = getRouteArrays(routes);

	const tree = createObjectTree(newRoutes);

	console.log(tree);

	return tree;
}

function getRouteArrays(routes: Array<Array<string>>) {
	const newRoutes = routes.map((el) => {
		const newArray = el
			.toString()
			.split('/')
			.filter((el) => {
				if (el !== '' && !el.match(/\[(.*?)\]/gi) && !el.match(/\((.*?)\)/gi)) return el;
			});
		return newArray;
	});
	return newRoutes;
}

interface Link {
	type: string;
	label: string;
	href: string;
	alt: string;
}

interface LinkMenu {
	type: string;
	label: string;
	[key: string]: string | Link | undefined;
}

/**
 * !! I need to look at how to handle this to change from an object to an array with subArrays like my link tree.
 */

function createObjectTree(arrayOfArrays: Array<Array<string>>) {
	const tree: LinkMenu = {}; // The root of the object tree

	for (let i = 0; i < arrayOfArrays.length; i++) {
		let currentLevel: LinkMenu = tree; // Start at the root for each path

		for (let x = 0; x < arrayOfArrays[i].length; x++) {
			const nodeName = arrayOfArrays[i][x];

			if (x === arrayOfArrays[i].length - 1) {
				if (arrayOfArrays[i + 1] && nodeName == arrayOfArrays[i + 1][0]) {
					currentLevel[nodeName] = {
						type: 'menu',
						label: `${nodeName.replace('-', ' ').toUpperCase()}`
					};
				} else {
					// If it's the last element, it's a "leaf" (e.g., a file or final value)
					// You can assign a value or an empty object based on your needs
					currentLevel[nodeName] = {
						type: 'link',
						label: `${nodeName.replace('-', ' ').toUpperCase()}`,
						href: `/${nodeName}`,
						alt: `${nodeName.toUpperCase()}`
					}; // Example: assign null for files
				}
			} else {
				// If it's an intermediate element, it's a "folder" or a parent node
				if (!currentLevel[nodeName]) {
					currentLevel[nodeName] = {}; // Create a new object if it doesn't exist
				}
				currentLevel = currentLevel[nodeName]; // Move to the next level in the tree
			}
		}
	}
	return tree;
}
