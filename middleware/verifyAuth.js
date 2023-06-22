const jwt = require('jsonwebtoken');

const verifyAuth = async (req, res, next) => {
	try {
		const token = req.cookies.token;
		const user = jwt.verify(token, process.env.MY_SECRET);
		req.user = user;
		next();
	} catch (err) {
		res.clearCookie('token');
		res.status(401).json('Unauthorized');
	}
};

module.exports = { verifyAuth };
