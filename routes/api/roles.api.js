'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

//Load model
const Role = require('../../controllers/roles.controller');

//Load validation
const validateRegisterRole = require('../../validations/role-registration');

/*********************************
* Post routes
*********************************/
//@route    POST api/roles/register
//@desc     REGISTER a role
//@access   PRIVATE
router.post('/register', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateRegisterRole(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}
	let newrole = {
		role_name: req.body.role.toLowerCase(),
	};
	Role.findRole(newrole)
		.then(data => {
			if (data === null) {
				Role.saveRole(newrole)
					.then(role => {
						res.status(200).json(role);
					})
					.catch(err => err);
			} else {
				res.status(400).json({ err: 'Error, role already exists.' });
			}
		})
		.catch(err => {
			res.json({ error: err.toString() });
		});
});

/*********************************
* PUT routes
*********************************/
//@route    PUT api/roles/updaterole
//@desc     Update a role
//@access   PRIVATE
router.put('/updaterole', (req, res) => {
	let updaterole = {
		id: parseInt(req.body.id),
		role_name: req.body.role,
	};
	Role.updateRole(updaterole)
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(400).json(err);
			// res.status(400).json({ error: err.toString() });
		});
});

/*********************************
* GET routes
*********************************/
//@route    GET api/roles/getroles
//@desc     Get  all roles from the database
//@access   Public
router.get('/getroles', (req, res) => {
	Role.getRoles()
		.then(roles => {
			res.status(200).json(roles);
		})
		.catch(err => {
			res.status(404).json(err);
		});
});

//@route    GET api/roles/rolesandusers
//@desc     Get all users belonging to any role
//@access   Public
router.get('/rolesandusers', (req, res) => {
	Role.getRolesAndUsers()
		.then(roles => {
			res.status(200).json(roles);
		})
		.catch(err => {
			res.status(404).json(err);
		});
});

/*********************************
* DELETE routes
*********************************/
//@route    DELETE api/roles/updaterole
//@desc     Delete a role
//@access   PRIVATE
router.delete('/deleterole', (req, res) => {
	let deleterole = {
		id: parseInt(req.body.id),
	};
	Role.deleteRole(deleterole)
		.then(data => {
			res.status(200).json(data);
		})
		.catch(err => {
			res.status(400).json(err);
			// res.status(400).json({ error: err.toString() });
		});
});

module.exports = router;
