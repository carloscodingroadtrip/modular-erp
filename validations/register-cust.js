const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCustomerInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : '';
	data.address = !isEmpty(data.address) ? data.address : '';
	data.hascredit = !isEmpty(data.hascredit) ? data.hascredit : '';
	data.creditline = !isEmpty(data.creditline) ? data.creditline : '';
	data.balance = !isEmpty(data.balance) ? data.balance : '';
	data.email = !isEmpty(data.email) ? data.email : '';
	data.phone = !isEmpty(data.phone) ? data.phone : '';
	data.fax = !isEmpty(data.fax) ? data.fax : '';

	// validate name length
	if (
		!Validator.isLength(data.name, {
			min: 2,
			max: 100,
		})
	) {
		errors.name = 'Customer name must be between 2 and 100 characters.';
	}
	// validate if credit line has only numbers
	if (!Validator.isEmpty(data.creditline)) {
		if (!Validator.isNumeric(data.creditline)) {
			errors.creditline = 'Credit line has to be numeric characters only.';
		}
	}
	// validate if phone contains only numbers
	if (!Validator.isEmpty(data.phone)) {
		if (!Validator.isNumeric(data.phone)) {
			errors.phone = 'Phone has to be numeric characters only.';
		}
	}
	// validate if fax contains only numbers
	if (!Validator.isEmpty(data.fax)) {
		if (!Validator.isNumeric(data.phone)) {
			errors.fax = 'Fax has to be numeric characters only.';
		}
	}
	// validate if name is empty
	if (Validator.isEmpty(data.name)) {
		errors.name = 'Customer name is required.';
	}
	// validate if hascredit is empty
	if (Validator.isEmpty(data.hascredit)) {
		errors.hascredit = 'Credit field is required.';
	}
	if (!Validator.isEmail(data.email)) {
		errors.email = 'Email is invalid.';
	}
	// validate if address is empty
	if (Validator.isEmpty(data.address)) {
		errors.address = 'Customer address is required.';
	}
	// validate if customer has a line of credit
	if (!Validator.isEmpty(data.hascredit)) {
		if (!Validator.isInt(data.hascredit, { min: 0, max: 1 })) {
			errors.hascredit = 'Line of credit true or false has to be 0 or 1.';
		}
	}
	// validate if customer balance is valid float
	if (!Validator.isEmpty(data.balance)) {
		if (!Validator.isFloat(data.balance)) {
			errors.balance = 'Balance must be numeric (e.g. 1000.00)';
		}
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
