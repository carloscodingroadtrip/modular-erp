'use strict';
let Controller = require('./baseController.js');
let path = require('path');
let db = require(path.join(__basedir, '/models'));

let product = {
	findProduct: product => {
		let found = db.Product
			.findOne({ where: { productId: product.productId } })
			.then(product => {
				console.log('FOUND', product);
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
	getProductAndPrices: () => {
		let data = db.Product.findAll({ include: [{ model: db.Price }] });
		return data;
	},
	updateProduct: product => {
		return db.Product
			.findOne({ where: { productId: product.productId } })
			.then(foundProductToUpdate => {
				console.log('FOUND', foundProductToUpdate);
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
	deleteProduct: product => {
		return db.Product
			.findById(product.id)
			.then(productToDelete => {
				if (productToDelete !== null) {
					return productToDelete.destroy(product).then(deleted => {
						return { success: 'Product has been deleted from the database.' };
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

module.exports = product;
