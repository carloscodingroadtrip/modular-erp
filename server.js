const express = require('express');
const router = express.Router();
const app = express();

//Load database models
const db = require('./models');

app.use('/', (req, res) => {
	res.send('home page');
});

//Fire app the server
const port = process.env.PORT || 5000;

db.sequelize.sync({ force: true }).then(() => {
	app.listen(port, () => {
		console.log('App listening on PORT ' + port);
	});
});
