const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.cookies.token;

		if (token === undefined) {
			return res.status(401).json({ token: '', message: 'Auth failed' });
		} else {
			const decoded = jwt.verify(token, process.env.JWT_KEY);
			req.userData = decoded;
			next();
		}
	} catch (error) {
		console.log('Error in checkAuth');

		res.status(401).json({ token: '', message: 'Auth failed' });
	}
};
