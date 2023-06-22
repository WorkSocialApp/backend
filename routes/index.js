const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const groupsRouter = require('./groups');
const eventsRouter = require('./events');
const authRouter = require('./auth');

router.use('/groups', groupsRouter);
router.use('/users', usersRouter);
router.use('/events', eventsRouter);
router.use('/auth', authRouter);

module.exports = router;
