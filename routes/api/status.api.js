'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const isEmpty = require('../../validations/is-empty');
const Validator = require('validator');
// Load models
const Status = require('../../controllers/status.controller');

//load Validation
const validateStatus = require('../../validations/status');

/**************************************************
// * POST routes
****************************************************/
//@route    POST api/status/register
//@desc     Register a status
//@access   Private
router.post('/register', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateStatus(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//Create the status object
	let newstatus = {
		status: req.body.status,
	};

	Status.findStatus(newstatus).then(data => {
		if (data === null) {
			//status does not exist
			Status.saveStatus(newstatus)
				.then(status => {
					res.status(200).json(status);
				})
				.catch(err => {
					console.log(err);
					res.status(400).json({ err: 'Error saving to the database. ' });
				});
		} else {
			//Else, if the status exist, send an error.
			res.status(400).json({ err: 'Error, that status already exist.' });
		}
	});
});

module.exports = router;
