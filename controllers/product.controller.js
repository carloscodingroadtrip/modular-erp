'use strict';
let Controller = require('./baseController.js');
let path = require('path');
let db = require(path.join(__basedir, '/models'));

let product = {
	findProduct: product => {
		let found = db.Product
			.findOne({ where: { productId: product.productId } })
			.then(product => {
				if (!product === null) {
					return { err: 'No such a product in the database.' };
				} else {
					return product;
				}
			})
			.catch(err => console.log(err));
		return found;
	},
	saveProduct: product => {
		return db.Product
			.create(product)
			.then(product => product)
			.catch(err => err);
	},
	getProducts: async () => {
		let product = new Controller('Product');
		return product
			.getData()
			.then(products => products)
			.catch(err => JSON.stringify(err));
	},
	updateProduct: product => {
		return db.Product
			.findOne({ where: { productId: product.productId } })
			.then(foundProductToUpdate => {
				if (foundProductToUpdate !== null) {
					return foundProductToUpdate
						.update(product)
						.then(finalUpdatedProduct => finalUpdatedProduct)
						.catch(err => err);
				} else {
					return { error: 'Product does not exist.' };
				}
			})
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error saving to the db.' });
			})
			.then(updated => updated)
			.catch(err => {
				console.log(err);
				res.status(400).json({ err: 'error getting data from the database' });
			});
	},
	assignPrice: price => {
		return db.Price
			.findOne({
				where: {
					CustomerId: price.CustomerId,
					ProductId: price.ProductId,
				},
			})
			.then(found => {
				console.log('FOUND', found);
				if (found === null) {
					return db.Price
						.create(price)
						.then(assignedPrice => assignedPrice)
						.catch(err => err);
				} else {
					return { error: 'This product and price has already been assigned to this customer' };
				}
			})
			.catch(err => err);
	},
	// updateCustomerPrice: itemToUpdate => {
	// 	return
	// }
};

module.exports = product;
