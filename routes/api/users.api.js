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

/**
* Post routes
*/
//@route    GET api /users/getusers
//@desc     Get  allusers
//@access   Public
router.post('/register', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateRegisterInput(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const avatar = gravatar.url(req.body.email, {
		s: '200', //size
		r: 'pg', //rating
		d: 'mm', //default
	});

	let newuser = {
		user_name: req.body.name,
		user_email: req.body.email,
		user_password: req.body.password,
		avatar: avatar,
		RoleId: parseInt(req.body.role),
	};

	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newuser.user_password + 'egf', salt, (err, hash) => {
			if (err) throw err;
			newuser.user_password = hash;
			User.findUser(newuser)
				.then(data => {
					if (data === null) {
						User.saveUser(newuser)
							.then(user => {
								res.status(200).json(user);
							})
							.catch(err => JSON.stringify(err));
					} else {
						res.status(400).json({ err: 'Error, user already exists.' });
					}
				})
				.catch(err => {
					res.json({ error: err.toString() });
				});
		});
	});
});

//@route    GET api /users/getusers
//@desc     Get  allusers
//@access   Public
router.get('/getusers', (req, res) => {
	User.getUsers()
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
			res.status(404).json(err);
		});
});

module.exports = router;
