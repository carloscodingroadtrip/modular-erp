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
	updateRole: item => {
		return db.Role
			.findById(item.id)
			.then(roleToUpdate => {
				if (roleToUpdate !== null) {
					return roleToUpdate.update(item).then(finalUpdatedRole => {
						return finalUpdatedRole;
					});
				} else {
					return { error: 'Role does not exist.' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'eroro' });
			});
	},
	deleteRole: item => {
		return db.Role
			.findById(item.id)
			.then(roleToDelete => {
				if (roleToDelete !== null) {
					return roleToDelete.destroy(item).then(deleted => {
						return deleted;
					});
				} else {
					return { error: 'Role does not exist.' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error deleting from database' });
			});
	},
};

module.exports = role;

// models.TimesheetItem
// 	.findById(item.id)
// 	.then(itemInstance => {
// 		return itemIstance.update(item).then(self => {
// 			return self;
// 		});
// 	})
// 	.catch(e => {
// 		console.log(e);
// 	});

// models.People.update({OwnerId: peopleInfo.newuser},
//     {where: {id: peopleInfo.scenario.id}})
//     .then(function (result) {
//       models.People.findById(peopleInfo.scenario.id)
//       .then(function(user){
//         response(user).code(200);
// 	  })
// 	  .catch(function (err) {
// 		 request.server
// 		 		.log(['error'], err.stack)
//        			.code(200);
//       })
// 	})
// 	.catch(function (err) {
//     	request.server.log(['error'], err.stack);
// 	})
//    .code(200);
// });
