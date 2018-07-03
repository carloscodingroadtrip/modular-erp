'use strict';
let Controller = require('./baseController.js');
let path = require('path');
let db = require(path.join(__basedir, '/models'));

let user = {
	findUser: values => {
		let found = db.User
			.findOne({ where: { user_email: values.user_email } })
			.then(data => data)
			.catch(err => console.log(err));
		return found;
	},
	saveUser: values => {
		let savedUser = db.User
			.create(values, {
				include: [
					{
						model: db.Role,
					},
				],
			})
			.then(data => data)
			.catch(err => {
				console.log(err);
				JSON.stringify(err);
			});

		return savedUser;
	},

	getUsers: async () => {
		let user = new Controller('User');
		return user
			.getData()
			.then(data => data)
			.catch(err => JSON.stringify(err));
	},
};

module.exports = user;
