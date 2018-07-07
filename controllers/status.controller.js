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
};

module.exports = status;
