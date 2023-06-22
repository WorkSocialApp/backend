const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid').v4;

router.get('/login', (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			res.status(400).json({ error: 'Please enter all fields' });
		} else {
			/*
        Check if user exists in the database (by email)
        If the user exists, compare the password to the users stored password in db
        If successful, give user cookie
      
        Since we do not have models fully working, I am using dummy data here.
      */
			const sessionId = uuidv4();
		}
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.get('/signup', (req, res) => {
	try {
		const { first_name, last_name, email, password } = req.body;
		if (!first_name || !last_name || !email || !password) {
			res.status(400).json({ error: 'Please enter all fields' });
		} else {
			/*
        Check if the user already exists,
        Create the user, and give cookie
      */
		}
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.get('/test', (req, res) => {
	try {
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

module.exports = router;
