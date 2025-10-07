import AdminLayout from '$lib/config/dataModels/AdminLayout';

export async function load() {
	return { links: AdminLayout.links, header: AdminLayout.header, footer: AdminLayout.footer };
}
