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
		return db.Role.findById(values.RoleId).then(role => {
			// null will be returned if role was not found
			if (role === null) {
				return { error: 'Trying to assing an incorrect role.' };
			} else {
				//Save to the database
				return db.User
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
			}
		});
	},

	getUsers: async () => {
		let user = new Controller('User');
		return user
			.getData()
			.then(data => data)
			.catch(err => JSON.stringify(err));
	},
	deleteUser: user => {
		return db.User
			.findById(user.id)
			.then(userToDelete => {
				console.log(userToDelete);
				if (userToDelete !== null) {
					return userToDelete.destroy(user).then(deleted => {
						return { success: 'User has been deleted.' };
					});
				} else {
					return { error: 'User does not exist' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error deleting from database' });
			});
	},
};

module.exports = user;
