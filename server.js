global.__basedir = __dirname;
const http = require('http');
const express = require('express');
const router = express.Router();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const app = express();

//Load routes
const users = require('./routes/api/users.api');
const customers = require('./routes/api/customers.api');
const products = require('./routes/api/products.api');
const orders = require('./routes/api/orders.api');
const status = require('./routes/api/status.api');
const roles = require('./routes/api/roles.api');

//Load database models
const db = require('./models');

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// -------------------------------------------- method Override middleware
app.use(methodOverride('_method'));

//Use routes
app.use('/api/users', users);
app.use('/api/customers', customers);
app.use('/api/products', products);
app.use('/api/orders', orders);
app.use('/api/roles', roles);
app.use('/api/status', status);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

//Fire up the server
const port = process.env.PORT || 4000;

// { force: true }
db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log('App listening on PORT ' + port);
	});
});
