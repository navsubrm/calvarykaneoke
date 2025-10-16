import { NODE_MAILER_USERNAME } from '$env/static/private';

export function contactMailObject(
	name: string | FormDataEntryValue | null,
	email: string | FormDataEntryValue | null,
	message: string | FormDataEntryValue | null
) {
	return {
		from: `${email || NODE_MAILER_USERNAME}`,
		to: NODE_MAILER_USERNAME,
		subject: 'New Contact Form Entry from JD Farag.org (Contact)',
		text: `
				Name: ${name}\n\n
				Email: ${email}\n\n
				Message: ${message}`,
		html: `
				<p><strong style="font-size: 1.2em">Name: </strong> ${name}</p>
				<p><strong style="font-size: 1.2em">Email: </strong> ${email}</p>
				<p><strong style="font-size: 1.2em">Message: </strong> ${message}</p>`
	};
}
