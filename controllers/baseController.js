'use strict';
let path = require('path');
let db = require(path.join(__basedir, '/models'));

class Controller {
	constructor(modelName) {
		this.model = db[modelName];
		this.response = {};
	}

	async getData() {
		const data = await this.model
			.findAll({ raw: true })
			.then(data => data)
			.catch(err => err);
		return (this.response = data);
	}
}

module.exports = Controller;
