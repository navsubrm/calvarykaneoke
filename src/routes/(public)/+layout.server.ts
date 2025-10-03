import Layout from '$lib/config/dataModels/Layout';

export async function load({ platform }) {
	return { links: Layout.links, header: Layout.header, footer: Layout.footer };
}
