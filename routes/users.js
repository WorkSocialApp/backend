const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	try {
		// do here
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

module.exports = router;
