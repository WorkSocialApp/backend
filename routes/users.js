const express = require('express');
const router = express.Router();
const { Users } = require("../schema/models/users")
const { verifyAuth } = require('../middleware/verifyAuth');

// GET - Retrieve all Users
router.get("/", verifyAuth, async (req, res) => {
	try {
	  let user = await Users.findAll().then((allUsers) => {
		  res.status(200).json({ user });

	  })
	  .catch((error) => {
		  res.status(500).json({ message: "Server Internal Error", error: err });

	  })
	} catch (err){}
  });

module.exports = router;
