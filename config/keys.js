if (process.env.NODE_ENV === 'production') {
	module.exports = {
		secretOrKey: process.env.SECRET_OR_KEY,
	};
} else {
	module.exports = require('./config.json').apiconfig;
}
