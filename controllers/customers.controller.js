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
			.findById(customer.id, {
				include: [{ model: db.AddressBook, as: 'addresses' }],
			})
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
	updateCustomer: async function executeUpdate(customer, address) {
		//Get the Customer to update
		const updatedCustomer = await db.Customer
			.findById(customer.id, {
				where: { CustomerId: customer.id },
			})
			.then(customerToUpdate => {
				if (customerToUpdate !== null) {
					//If we have the customer
					//Continue and update the customer
					return customerToUpdate.update(customer).then(finalUpdatedCustomer => {
						return finalUpdatedCustomer; //send back the updated customer
					});
				} else {
					return { error: 'Customer does not exist.' };
				}
			})
			.catch(err => {
				//Send the status, and an error
				res.status(400).json({ err: 'error updating record.' });
			});
		//Get the address related to the customer
		const updatedCustomerAddress = await db.AddressBook
			.findById(address.addressId, {
				where: { addressId: address.addressId },
			})
			.then(addressToUpdate => {
				if (addressToUpdate !== null) {
					//if we have the address
					//continue and update the address
					return addressToUpdate.update(address).then(finalUpdatedCustomerAddress => {
						return finalUpdatedCustomerAddress; //send back the updated address
					});
				} else {
					return { error: 'Address does not exist.' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error updating record.' });
			});
		//build a new object, and return it
		return { customer: updatedCustomer, address: updatedCustomerAddress };
	},
	addAddress: address => {
		return db.AddressBook
			.create(address)
			.then(data => data)
			.catch(err => err);
	},
	updateAddress: address => {
		return db.AddressBook
			.findById(address.addressId, {
				where: { addressId: address.addressId },
			})
			.then(addressToUpdate => {
				if (addressToUpdate !== null) {
					return addressToUpdate.update(address).then(finalUpdatedAddress => {
						return finalUpdatedAddress;
					});
				} else {
					return { error: 'Address does not exist.' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error updating record.' });
			});
	},
};

module.exports = customer;
