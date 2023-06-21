const express = require('express');
const router = express.Router();
const { Users } = require("../schema/models/users")

// GET - Retrieve all Users
router.get("/", async (req, res) => {
	try {
	  let user = await Users.findAll();
	  res.status(200).json({ user });
	} catch (err) {
	  res.status(500).json({ message: "Server Internal Error", error: err });
	}
  });

module.exports = router;
