const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		console.log(req.headers.authorization);
		const token = req.headers.authorization.split(' ')[1];
		console.log(process.env.JWT_KEY);

		const decoded = jwt.verify(token, process.env.JWT_KEY);
		console.log(decoded, 'dwadwa');

		req.userData = decoded;
		next();
	} catch (error) {
		return res.status(401).json({ message: 'Auth failed' });
	}
};
