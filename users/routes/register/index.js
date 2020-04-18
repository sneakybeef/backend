const router = require('express').Router();

const bcrypt = require('bcrypt');

const { addUser, getUserByEmail, getUserByUserName } = require('../../database/users.js');

const register = async (req, res, next) => {
	const { email, userName, password } = req.body;

	getUserByEmail(email)
		.then((resp) => {
			if (resp) {
				return res.status(409).json({ message: 'email exists' });
			}
		})
		.catch((err) => res.status(501).json({ message: 'User not added' }));
	getUserByUserName(userName)
		.then((resp) => {
			if (resp) {
				return res.status(409).json({ message: 'userName exists' });
			}
		})
		.catch((err) => res.status(501).json({ message: 'User not added' }));

	bcrypt.hash(password, 10, async (err, hash) => {
		if (err) {
			return res.status(500).json({ error: err });
		} else {
			user = {
				email: email,
				userName: userName,
				passwordHash: hash
			};
			if (await addUser(user)) {
				return res.status(200).json({ message: 'User added' });
			}
			res.status(501).json({ message: 'User not added' });
		}
	});
};
router.post('/register', register);

module.exports = router;
