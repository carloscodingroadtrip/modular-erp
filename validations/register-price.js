const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePrices(data) {
	let errors = {};

	data.price = !isEmpty(data.price) ? data.price : '';

	// validate if price has only numbers
	if (!Validator.isEmpty(data.price)) {
		if (!Validator.isNumeric(data.price)) {
			errors.price = 'Price has to be numeric characters only.';
		}
	}

	// validate if price is empty
	if (Validator.isEmpty(data.price)) {
		errors.price = 'Price name is required.';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
