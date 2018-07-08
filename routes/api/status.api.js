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
const validateStatus = require('../../validations/register-status');

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
			//If data is null, status does not exist
			//Go ahead and save to the db
			Status.saveStatus(newstatus)
				.then(status => {
					res.status(200).json(status);
				})
				.catch(err => {
					console.log(err);
					res.status(400).json({ err: 'Error, saving to the db. ' });
				});
		} else {
			//Else, if the status exist, send an error.
			res.status(400).json({ err: 'Error, that status already exist.' });
		}
	});
});

/**************************************************
// * GET routes
****************************************************/
//@route    GET api/status/getallstatus
//@desc     Get all status
//@access   Private
router.get('/getall', (req, res) => {
	Status.getAllStatus()
		.then(status => {
			res.status(200).json(status);
		})
		.catch(err => {
			res.status(400).json({ err: 'No status exist in the database.' });
		});
});

/*********************************
* PUT routes
*********************************/
//@route    PUT api/status/updatestatus
//@desc     Update a status
//@access   PRIVATE
router.put('/updatestatus', (req, res) => {
	let status = {
		id: req.body.id,
		status: req.body.status,
	};
	Status.updateStatus(status)
		.then(newStatus => {
			res.status(200).json(newStatus);
		})
		.catch(err => {
			res.status(400).json({ err: 'Error updating the status.' });
		});
});

/*********************************
* DELETE routes
*********************************/
//@route    DELETE api/roles/updaterole
//@desc     Delete a role
//@access   PRIVATE
router.delete('/deletestatus', (req, res) => {
	let status = {
		id: parseInt(req.body.id),
	};
	Status.deleteStatus(status)
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

module.exports = router;
