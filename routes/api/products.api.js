const path = require('path');
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load models
const Product = require('../../controllers/product.controller');

//load Validation
const validateProduct = require('../../validations/register-product');

/**************************************************
// * POST routes
****************************************************/
//@route    POST api/products/register
//@desc     Register a product
//@access   Private
router.post('/register', (req, res) => {
	//Check Validation
	const { errors, isValid } = validateProduct(req.body);
	if (!isValid) {
		return res.status(400).json(errors);
	}

	//Create the status object
	let newproduct = {
		productId: req.body.id.toLowerCase(),
		desc: req.body.desc.toUpperCase(),
		who: req.body.who.toLowerCase(),
	};

	Product.findProduct(newproduct).then(product => {
		if (product === null) {
			//If product is null, product does not exist, so we can
			//continue and save to the db
			Product.saveProduct(newproduct)
				.then(product => {
					res.status(200).json(product);
				})
				.catch(err => {
					console.log(err);
					res.status(400).json({ err: 'Error, saving to the db.' });
				});
		} else {
			//Else, if the product exist, send an error.
			res.status(400).json({ err: 'Error, that product already exist.' });
		}
	});
});

module.exports = router;
