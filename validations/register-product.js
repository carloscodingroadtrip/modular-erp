const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProduct(data) {
	let errors = {};

	data.id = !isEmpty(data.id) ? data.id : '';
	data.desc = !isEmpty(data.desc) ? data.desc : '';
	data.who = !isEmpty(data.who) ? data.who : '';

	// validate status length
	if (
		!Validator.isLength(data.id, {
			min: 2,
			max: 20,
		})
	) {
		errors.id = 'Product Id must be between 2 and 20 characters.';
	}

	// validate if status is empty
	if (Validator.isEmpty(data.id)) {
		errors.id = 'ProductId is required.';
	}

	// validate if status is empty
	if (Validator.isEmpty(data.desc)) {
		errors.desc = 'Product description is required.';
	}

	// validate if status is empty
	if (Validator.isEmpty(data.who)) {
		errors.who = 'User creating the product is required.';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
