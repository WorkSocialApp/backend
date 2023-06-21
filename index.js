require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const server = express();

const apiRouter = require('./routes');

const port = process.env.PORT || 8080;

server.use(
	morgan(':method :url :status :response-time ms - :res[content-length]')
);
server.use(express.json()); // for parsing application/json
server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Use routers
server.use('/api', apiRouter);

server.get('/', (req, res) => {
	res.json({ message: 'Hello, World' });
});

server.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

server.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
