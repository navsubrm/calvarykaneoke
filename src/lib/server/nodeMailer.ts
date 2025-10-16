import { NODE_MAILER_USERNAME, NODE_MAILER_APP_PASSWORD } from '$env/static/private';
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: NODE_MAILER_USERNAME,
		pass: NODE_MAILER_APP_PASSWORD
	}
});

export const mailOptions = {
	from: NODE_MAILER_USERNAME,
	to: NODE_MAILER_USERNAME
};
