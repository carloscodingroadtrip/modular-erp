const path = require('path');
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const Product = require(path.join(__basedir, '/controllers')).Product;

//load Input Validation

/**
* Post routes
*/

module.exports = router;
