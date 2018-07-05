'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const isEmpty = require('../../validations/is-empty');
const Validator = require('validator');

//Load models
const Customer = require('../../controllers/customers.controller');

//load Input Validation
const validateCustomerInput = require('../../validations/register-cust');

/**************************************************
// * POST routes
****************************************************/
//@route    POST api/customers/register
//@desc     Register a customer
//@access   Private
router.post('/register', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateCustomerInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//Create the user object
	let newcustomer = {
		cust_name: req.body.name,
		cust_hascredit: req.body.hascredit,
		cust_creditline: req.body.creditline,
		cust_balance: req.body.balance,
		cust_email: req.body.email,
		cust_phone: req.body.phone,
		cust_fax: req.body.fax,
		addresses: [
			{
				address: req.body.address,
			},
		],
	};

	Customer.findCustomer(newcustomer)
		.then(data => {
			console.log(data);
			//If the user does NOT exists,
			//Save the user and return the JSON object
			if (data === null) {
				Customer.saveCustomer(newcustomer)
					.then(customer => {
						res.status(200).json(customer);
					})
					.catch(err => JSON.stringify(err));
			} else {
				//If the user exist, send an error.
				res.status(400).json({ err: 'Error, customer already exists.' });
			}
		})
		.catch(err => {
			res.json({ error: err.toString() });
		});
});

module.exports = router;
