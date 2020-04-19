const router = require('express').Router();

const signout = async (req, res, next) => {
	res.cookie('token', '', { maxAge: 900000, httpOnly: true });
	console.log('cookie deleted successfully');
	res.status(200).json({
		message: 'logout successful'
	});
};
router.post('/logout', signout);

module.exports = router;
