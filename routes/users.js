const express = require('express');
const router = express.Router();
const { Users } = require("../schema/models/users")
const { verifyAuth } = require('../middleware/verifyAuth');

// GET - Retrieve all Users
router.get("/", verifyAuth, async (req, res) => {
	try {
	  let users = await Users.findAll()  
		res.send(users)
    res.status(200).json({ message:"success"});
  }
  catch(error) {
	res.status(500).json({ message: "Server Internal Error", error: err });
  }
});
module.exports = router;
