const jwt = require('jsonwebtoken');

const verifyAuth = async (req, res, next) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (authorizationHeader) {
			// Split the header value to separate the "Bearer" keyword and the token
			const [bearerKeyword, token] = authorizationHeader.split(' ');
			if (bearerKeyword === 'Bearer' && token) {
				const user = jwt.verify(token, process.env.AUTH_SECRET);
				console.log(user);
				req.user = user;
				next();
			}
		}
	} catch (err) {
		// If the token is missing or in an invalid format
		res.status(401).json('Unauthorized');
	}
};

module.exports = { verifyAuth };
