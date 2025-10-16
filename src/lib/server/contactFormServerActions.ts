import { transporter } from '$lib/server/nodeMailer';
import { contactMailObject } from '$lib/config/helperFunctions/mailObjects';

interface Reply {
	nameMissing?: boolean;
	emailMissing?: boolean;
	messageMissing?: boolean;
}

/** @param {Request} request */
async function contactFormServerActions(request: Request) {
	const reply: Reply = {};
	const formData = await request.formData();
	const name = formData.get('contact_name');
	const email = formData.get('contact_email');
	const message = formData.get('contact_message');

	//Validate entries:
	if (!name || name == '') reply.nameMissing = true;
	if (!email || email == '') reply.emailMissing = true;
	if (!message || message.toString().length < 4) reply.messageMissing = true;

	const replyInputs = { name, email, message };

	//Check Validation:
	if (Object.entries(reply).some((el) => el[1] == true))
		return { status: 409, details: { ...reply, ...replyInputs } };

	try {
		/** @type {any} mailObject */
		const mailObject = contactMailObject(name, email, message);
		await transporter.sendMail(mailObject);

		return {
			status: 200,
			details: {
				success: true,
				name: null,
				email: null,
				validation: null
			}
		};
	} catch (err) {
		console.error('Error from contact server action: ', err);
		return { status: 500, details: { postFail: true } };
	}
}

export default contactFormServerActions;
