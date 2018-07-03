'use strict';
let Controller = require('./baseController.js');
let path = require('path');
let db = require(path.join(__basedir, '/models'));

let role = {
	findRole: values => {
		let found = db.Role
			.findOne({ where: { role_name: values.role_name } })
			.then(data => data)
			.catch(err => console.log(err));
		return found;
	},
	saveRole: values => {
		let savedRole = db.Role
			.create(values)
			.then(data => data)
			.catch(err => err);

		return savedRole;
	},
	getRoles: async () => {
		let role = new Controller('Role');
		return role
			.getData()
			.then(data => data)
			.catch(err => JSON.stringify(err));
	},
	getRolesAndUsers: () => {
		let data = db.Role.findAll({ include: [{ model: db.User, as: 'roles' }] });
		return data;
	},
};

module.exports = role;
