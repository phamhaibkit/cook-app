import Joi from 'joi';
import { configs, fetchObject } from '../../../utils';

const createResetPasswordSchema = Joi.object().keys({
	passwordConfirm: Joi.string().required().valid(Joi.ref('password')).error(getErrorConfirmFormat),
	password: Joi.string().required().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/).error(getErrorFormat),
});



export function getResetPasswordObjectToValidate(object) {
	const {
		password, passwordConfirm
	} = object;
	return {
		password, passwordConfirm
	};
}

function getErrorFormat(error) {
	const errorType = fetchObject(error, '0.type');
	let message;
	switch (errorType) {
	case 'any.empty':
		message = 'Please enter your New password';
		break;
	case 'string.regex.base':
		message = 'Password must contain as least: one lower, one upper case letter, one digit, one of these special characters and as least 6 characters';
		break;
	default:
		message = 'Please enter your New password';
		break;
	}
	return { message };
}


function getErrorConfirmFormat(error) {
	console.log(error);
	const errorType = fetchObject(error, '0.type');
	let message;

	switch (errorType) {
	case 'any.empty':
		message = 'Please enter your Confirm New Password';
		break;
	case 'any.allowOnly':
		message = 'Confirm Password not match!';
		break;
	default:
		message = 'Please enter your Confirm New Password';
		break;
	}
	return { message };
}

export function validateResetPassword(object) {
	const toBeValidated = getResetPasswordObjectToValidate(object);
	return Joi.validate(toBeValidated, createResetPasswordSchema, {
		abortEarly: false
	});
}
