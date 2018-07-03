const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterRole(data) {
	let errors = {};

	data.role = !isEmpty(data.role) ? data.role : '';
	//name
	if (
		!Validator.isLength(data.role, {
			min: 2,
			max: 30,
		})
	) {
		errors.role = 'Role must be between 2 and 30 characters';
	}

	if (Validator.isEmpty(data.role)) {
		errors.role = 'Role field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
