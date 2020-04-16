const router = require('express').Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getUserByUserName } = require('../../database/users.js');

const signin = async (req, res, next) => {
	const { userName, password } = req.body;

	getUserByUserName(userName)
		.then((user) => {
			if (!user) {
				res.status(401).json({ message: 'Auth failed' });
			}

			bcrypt.compare(password, user.passwordHash, (err, correct) => {
				if (err) {
					return res.status(401).json({ message: 'Auth failed' });
				}
				if (correct) {
					const token = jwt.sign(
						{
							email: user.email,
							userId: user.id
						},
						process.env.JWT_KEY,
						{ expiresIn: '1h' }
					);
					return res.status(200).json({
						message: 'Auth successful',
						token
					});
				}
				return res.status(200).json({ message: 'Auth failed' });
			});
		})
		.catch((err) => res.status(401).json({ message: 'Auth failed' }));
};
router.post('/signin', signin);

module.exports = router;
