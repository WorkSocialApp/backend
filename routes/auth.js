const express = require('express');
const router = express.Router();
const uuidv4 = require('uuid').v4;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { verifyAuth } = require('../middleware/verifyAuth');
require('dotenv').config();

const saltRounds = 10;
const sessionExpiration = '24h';

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

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			res.status(400).json({ error: 'Please enter all fields' });
		} else {
			// Check if User exists here using models, if not, continue
			// ** For now we are using mock user
			let user = { email };
			let isAuthed = bcrypt.compare(password, mockLoginUser.password); // compare db in future
			if (isAuthed) {
				// Sign with JWT
				let token = jwt.sign(user, process.env.AUTH_SECRET, {
					expiresIn: sessionExpiration,
				});

				// important to send user from db, should have first and last name
				res.status(200).json({ user, token });
			} else {
				res.status(401).json('Incorrect Credentials, Unauthorized');
			}
		}
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.post('/signup', async (req, res) => {
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

			// Store the new user in the db with the hashed password above!!!
			user.password = hashedPassword;

			// Delete password, and sign user
			delete user.password;

			// Sign with JWT
			let token = jwt.sign(user, process.env.AUTH_SECRET, {
				expiresIn: sessionExpiration,
			});

			res.status(200).json({ user, token });
		}
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.post('/test', verifyAuth, async (req, res) => {
	try {
		res.status(200).json('You are authorized, :^)');
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.post('/isAuthed', verifyAuth, async (req, res) => {
	try {
		res.status(200).json({
			message: 'You are authorized, :^)',
			user: req.user,
		});
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
