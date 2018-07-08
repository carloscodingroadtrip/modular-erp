'use strict';
let Controller = require('./baseController.js');
let path = require('path');
let db = require(path.join(__basedir, '/models'));

let status = {
	findStatus: values => {
		let found = db.Status
			.findOne({ where: { status: values.status } })
			.then(data => data)
			.catch(err => console.log(err));
		return found;
	},
	saveStatus: values => {
		//Save to the database
		return db.Status
			.create(values)
			.then(status => status)
			.catch(err => {
				console.log(err);
				JSON.stringify(err);
			});
	},
	getAllStatus: async () => {
		let statuses = new Controller('Status');
		return statuses
			.getData()
			.then(status => status)
			.catch(err => JSON.stringify(err));
	},
	updateStatus: status => {
		return db.Status
			.findById(status.id)
			.then(statusToUpdate => {
				if (statusToUpdate !== null) {
					return statusToUpdate.update(status).then(finalUpdatedStatus => {
						return finalUpdatedStatus;
					});
				} else {
					return { err: 'Status does not exist.' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error saving to the db.' });
			});
	},
	deleteStatus: status => {
		return db.Status
			.findById(status.id)
			.then(statusToDelete => {
				if (statusToDelete !== null) {
					return statusToDelete.destroy(status).then(deleted => {
						return { success: 'Status has been deleted.' };
					});
				} else {
					return { error: 'Status does not exist.' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'Error deleting status from database' });
			});
	},
};

module.exports = status;
