const router = require('express').Router();

const { createDb } = require('../../database/users.js');

router.get('/createDb', createDb);

module.exports = router;
