const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateUpdatingUser(data) {
	let errors = {};

	data.id = !isEmpty(data.id) ? data.id : '';
	data.name = !isEmpty(data.name) ? data.name : '';
	data.password = !isEmpty(data.password) ? data.password : '';
	data.password2 = !isEmpty(data.password2) ? data.password2 : '';
	data.role = !isEmpty(data.role) ? data.role : '';

	//name
	if (
		!Validator.isLength(data.name, {
			min: 2,
			max: 30,
		})
	) {
		errors.name = 'Name must be between 2 and 30 characters';
	}

	if (Validator.isEmpty(data.name)) {
		errors.name = 'Name field is required';
	}
	if (Validator.isEmpty(data.role)) {
		errors.role = 'Role field is required';
	}
	if (Validator.isEmpty(data.password)) {
		errors.password = 'Password field is required';
	}
	if (
		!Validator.isLength(data.password, {
			min: 6,
			max: 30,
		})
	) {
		errors.password = 'Password must be at least 6 characters';
	}
	if (
		!Validator.isLength(data.password2, {
			min: 6,
			max: 30,
		})
	) {
		errors.password2 = 'Confirm password field is required';
	}
	if (!Validator.equals(data.password, data.password2)) {
		errors.password2 = 'Password must match';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
