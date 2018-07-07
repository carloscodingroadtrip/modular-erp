const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateStatus(data) {
	let errors = {};

	data.status = !isEmpty(data.status) ? data.status : '';

	// validate status length
	if (
		!Validator.isLength(data.status, {
			min: 2,
			max: 100,
		})
	) {
		errors.status = 'Status must be between 2 and 100 characters.';
	}

	// validate if status is empty
	if (Validator.isEmpty(data.status)) {
		errors.status = 'Status is required.';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
