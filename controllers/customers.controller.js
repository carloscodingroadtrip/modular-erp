'use strict';
let Controller = require('./baseController.js');
let path = require('path');
let db = require(path.join(__basedir, '/models'));

let customer = {
	findCustomer: values => {
		let found = db.Customer
			.findOne({ where: { cust_name: values.cust_name }, include: [{ model: db.AddressBook, as: 'addresses' }] })
			.then(data => data)
			.catch(err => console.log(err));
		return found;
	},
	saveCustomer: values => {
		return db.Customer
			.create(values, {
				include: [
					{
						model: db.AddressBook,
						as: 'addresses',
					},
				],
			})
			.then(data => data)
			.catch(err => err);
	},
	getAllCustomers: async () => {
		let customer = new Controller('Customer');
		return customer
			.getData()
			.then(customer => customer)
			.catch(err => JSON.stringify(err));
	},
	deleteCustomer: customer => {
		return db.Customer
			.findById(customer.id)
			.then(customerToDelete => {
				// null will be returned if user was not found
				if (customerToDelete !== null) {
					return customerToDelete.destroy(customer).then(deleted => {
						return { success: 'Customer has been deleted.' };
					});
				} else {
					return { error: 'Customer does not exist' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error deleting from database' });
			});
	},
	updateCustomer: user => {
		return db.User
			.findById(user.id)
			.then(userToUpdate => {
				if (userToUpdate !== null) {
					return userToUpdate
						.update(user, {
							include: [{ model: db.Role }],
						})
						.then(finalUpdatedUser => {
							return finalUpdatedUser;
						});
				} else {
					return { error: 'User does not exist.' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error updating record.' });
			});
	},
};

module.exports = customer;
