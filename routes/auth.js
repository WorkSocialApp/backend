const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid').v4;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { verifyAuth } = require('../middleware/verifyAuth');

const saltRounds = 10;

const mockSignupUser = {
	first_name: 'Aaron',
	last_name: 'Mendez',
	email: 'aaron@gmail.com',
	password: 'password123',
};
const mockLoginUser = {
	first_name: 'Aaron',
	last_name: 'Mendez',
	email: 'aaron@gmail.com',
	password: '$2a$10$gEhCTLTZc/lnaaqq99CK9ev9w7sJhT1AaobviTNRTaeX3htJjW2We', // 'password' before hashing
};

router.get('/login', async (req, res) => {
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
		}
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.get('/signup', async (req, res) => {
	try {
		const { first_name, last_name, email, password } = req.body;
		if (
			!first_name.length ||
			!last_name.length ||
			!email.length ||
			!password.length
		) {
			res.status(400).json({ error: 'Please enter all fields' });
		} else {
			// Check if User exists here using models, if not, continue
			// ** For now we are using mock user
			let user = { first_name, last_name, email, password };
			// Hash the users password
			let hashedPassword = bcrypt.hashSync(user.password, saltRounds);

			// Store the new user in the db with the hashed password above
			user.password = hashedPassword;

			// Sign with JWT
			let token = jwt.sign(user, process.env.AUTH_SECRET, {
				expiresIn: '2m',
			});

			// Respond with cookie
			res.cookie('token', token, {
				httpOnly: true,
			});
			res.status(200).json('Signed up!');
		}
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.get('/test', verifyAuth, async (req, res) => {
	try {
		res.status(200).json('You are authorized, :^)');
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.get('/logout', async (req, res) => {
	try {
		console.log('Logging out. Clearing Token...');
		res.clearCookie('token');
		res.status(200).json('Logged out');
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

module.exports = router;
