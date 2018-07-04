'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load models
const User = require('../../controllers/user.controller');

//load Validation
const validateRegisterInput = require('../../validations/register-user');
const validateLoginInput = require('../../validations/login');
const validateUpdatingUser = require('../../validations/update-user');

/**************************************************
// * POST routes
****************************************************/
//@route    POST api/users/register
//@desc     Register a user
//@access   Private
router.post('/register', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateRegisterInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}
	//Get the avatar associated with the email
	const avatar = gravatar.url(req.body.email, {
		s: '200', //size
		r: 'pg', //rating
		d: 'mm', //default
	});

	//Create the user object
	let newuser = {
		user_name: req.body.name,
		user_email: req.body.email,
		user_password: req.body.password,
		avatar: avatar,
		RoleId: parseInt(req.body.role),
	};

	//Encrypt the password
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newuser.user_password + 'egf', salt, (err, hash) => {
			if (err) throw err;
			newuser.user_password = hash; //Assign the new hash to the password
			//Check if the user exists
			User.findUser(newuser)
				.then(data => {
					//If the user does NOT exists,
					//Save the user and return the JSON object
					if (data === null) {
						User.saveUser(newuser)
							.then(user => {
								res.status(200).json(user);
							})
							.catch(err => JSON.stringify(err));
					} else {
						//If the user exist, send an error.
						res.status(400).json({ err: 'Error, user already exists.' });
					}
				})
				.catch(err => {
					res.json({ error: err.toString() });
				});
		});
	});
});

/**************************************************
* GET routes
***************************************************/
//@route    GET api/users/getusers
//@desc     Get  allusers
// @access   Private
router.get('/getusers', (req, res) => {
	User.getUsers()
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
			res.status(404).json(err);
		});
});

/**************************************************
* DELETE routes
***************************************************/
//@route    DELETE api/users/deleteuser
//@desc     Delete a user
// @access  Private
router.delete('/deleteuser', (req, res) => {
	// Build the user to delete
	let deleteuser = {
		id: parseInt(req.body.id),
	};
	//Call the method and proceed to delete
	User.deleteUser(deleteuser)
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

/**************************************************
* PUT routes
***************************************************/
//@route    PUT api/users/updateuser
//@desc     Update a user
// @access  Private
router.put('/updateuser', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateUpdatingUser(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//Create the user object to update
	let updateuser = {
		id: req.body.id,
		user_name: req.body.name,
		user_password: req.body.password,
		RoleId: parseInt(req.body.role),
	};

	//Encrypt the password
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(updateuser.user_password + 'egf', salt, (err, hash) => {
			if (err) throw err;
			updateuser.user_password = hash; //Assign the new hash to the password
			//Check if the user exists
			User.updateUser(updateuser)
				.then(updatedRecord => {
					res.status(200).json(updatedRecord);
				})
				.catch(err => {
					res.json({ error: err.toString() });
				});
		});
	});
});

module.exports = router;
