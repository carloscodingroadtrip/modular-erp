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
//@desc     Register a customer and billing address
//@access   Private
router.post('/register', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateCustomerInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//Create the user object
	let newcustomer = {
		cust_name: req.body.name.toUpperCase(),
		cust_hascredit: req.body.hascredit,
		cust_creditline: req.body.creditline,
		cust_balance: req.body.balance,
		cust_email: req.body.email.toLowerCase(),
		cust_phone: req.body.phone,
		cust_fax: req.body.fax,
		addresses: [
			{
				address: req.body.address.toUpperCase(),
			},
		],
	};

	//Check to see if customer already exists
	Customer.findCustomer(newcustomer)
		.then(data => {
			if (data === null) {
				// Null = customer does not exists
				//We will continue and save the customer
				Customer.saveCustomer(newcustomer)
					.then(customer => {
						res.status(200).json(customer);
					})
					.catch(err => JSON.stringify(err));
			} else {
				//Else, If the customer exists, send an error.
				res.status(400).json({ err: 'Error, customer already exists.' });
			}
		})
		.catch(err => {
			res.status(400).json({ error: err.toString() });
		});
});

/**************************************************
// * GET routes
****************************************************/
//@route    GET api/customers/:name
//@desc     Get a customer info by name
//@access   Private
router.get('/getcustomer/:name', (req, res) => {
	let customer = {
		cust_name: req.params.name,
	};
	Customer.findCustomer(customer)
		.then(customer => {
			res.status(200).json(customer);
		})
		.catch(err => {
			res.status(404).json(err);
		});
});

//@route    GET api/customers/getallcustomers
//@desc     Get all customers info by name
//@access   Private
router.get('/getallcustomers', (req, res) => {
	Customer.getAllCustomers()
		.then(customers => {
			res.status(200).json(customers);
		})
		.catch(err => {
			res.status(404).json(err);
		});
});

/*********************************
* PUT routes
*********************************/
//@route    PUT api/customers/updatecustomer
//@desc     Update a customer
//@access   PRIVATE
router.put('/updatecustomer', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateCustomerInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//Create the user object
	let updateCustomer = {
		id: req.body.id,
		cust_name: req.body.name.toUpperCase(),
		cust_hascredit: req.body.hascredit,
		cust_creditline: req.body.creditline,
		cust_email: req.body.email.toLowerCase(),
		cust_phone: req.body.phone,
		cust_fax: req.body.fax,
	};

	let updateAddress = {
		address: req.body.address.toUpperCase(),
	};

	Customer.updateCustomer(updateCustomer, updateAddress)
		.then(newupdatedcustomer => {
			res.status(200).json(newupdatedcustomer);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

/*********************************
* DELETE routes
*********************************/
//@route    DELETE api/roles/updaterole
//@desc     Delete a role
//@access   PRIVATE
router.delete('/deletecustomer/:id', (req, res) => {
	let deletecustomer = {
		id: parseInt(req.params.id),
	};
	Customer.deleteCustomer(deletecustomer)
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

module.exports = router;
