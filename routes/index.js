const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const groupsRouter = require('./groups');
const eventsRouter = require('./events');

router.use('/users', usersRouter);
router.use('/groups', groupsRouter);
router.use('/events', eventsRouter);

module.exports = router;
