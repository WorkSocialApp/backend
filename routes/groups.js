const express = require("express");
const router = express.Router();
const { Groups } = require("../schema/models/groups");

let mockGroups = [
  { title: "Powerlifting", members: [["Aaron", "Jhonny", "Nherhu"]] },
  {},
  {},
];

// GET / - Retrieve all groups
router.get("/", async (req, res) => {
  try {
    let groups = await Groups.findAll();
    res.status(200).json({ groups });
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

// POST / - Create a new group
router.post("/", async (req, res) => {
  try {
    const { title, members, count } = req.body;
    let newGroup = await Groups.create({ title });
    if (newGroup) {
      res.status(201).json({ group: newGroup });
    } else {
      res.status(500).json({ error: "Failed to create a new group" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

// DELETE /:id - Delete a group by ID
router.delete("/:id", async (req, res) => {
  try {
    const groupId = req.params.id;
    let deletedGroup = await Groups.destroy({ where: { id: groupId } });
    if (deletedGroup) {
      res.status(200).json({ message: "Group deleted successfully" });
    } else {
      res.status(404).json({ error: "Group not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

// PUT /:id - Update a group by ID
router.put("/:id", async (req, res) => {
  try {
    const groupId = req.params.id;
    const { title } = req.body;
    // let updatedGroup = await Groups.update({ title }, { where: { id: groupId } });
    if (!title) {
      res.status(400).json({ message: "Please enter a valid Title" });
    } else {
      if (updatedGroup[0]) {
        res.status(200).json({ message: "Group updated successfully" });
      } else {
        res.status(404).json({ error: "Group not found" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Internal Error" });
  }
});

// //USERS

// //get users
// const getUsers = async () => {
// 	try {
// 		const response = await fetch(`${apiURL}/users`, {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 		const users = await response.json();
// 		// Process the users data as needed
// 		// ...
// 	} catch (error) {
// 		console.log('Could not get users: ' + error);
// 	}
// };

// //create users
// const createUser = async (newUser) => {
// 	try {
// 		await fetch(`${apiURL}/users`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(newUser),
// 		});
// 		// Additional logic after successful user creation
// 		// ...
// 	} catch (error) {
// 		console.log('Could not create user: ' + error);
// 	}
// };

// //delete users
// const deleteUser = async (id) => {
// 	try {
// 		await fetch(`${apiURL}/users/${id}`, {
// 			method: 'DELETE',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 		// Additional logic after successful user deletion
// 		// ...
// 	} catch (error) {
// 		console.log('Could not delete user: ' + error);
// 	}
// };

// //delete users
// const updateUser = async (id, updatedUser) => {
// 	try {
// 		await fetch(`${apiURL}/users/${id}`, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(updatedUser),
// 		});
// 		// Additional logic after successful user update
// 		// ...
// 	} catch (error) {
// 		console.log('Could not update user: ' + error);
// 	}
// };

// //EVENTS

// //get events
// const getEvents = async () => {
// 	try {
// 		const response = await fetch(`${apiURL}/events`, {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 		const events = await response.json();
// 		// Process the events data as needed
// 		// ...
// 	} catch (error) {
// 		console.log('Could not get events: ' + error);
// 	}
// };

// //create events
// const createEvent = async (newEvent) => {
// 	try {
// 		await fetch(`${apiURL}/events`, {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(newEvent),
// 		});
// 		// Additional logic after successful event creation
// 		// ...
// 	} catch (error) {
// 		console.log('Could not create event: ' + error);
// 	}
// };

// //delete events
// const deleteEvent = async (id) => {
// 	try {
// 		await fetch(`${apiURL}/events/${id}`, {
// 			method: 'DELETE',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});
// 		// Additional logic after successful event deletion
// 		// ...
// 	} catch (error) {
// 		console.log('Could not delete event: ' + error);
// 	}
// };

// //update events
// const updateEvent = async (id, updatedEvent) => {
// 	try {
// 		await fetch(`${apiURL}/events/${id}`, {
// 			method: 'PUT',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify(updatedEvent),
// 		});
// 		// Additional logic after successful event update
// 		// ...
// 	} catch (error) {
// 		console.log('Could not update event: ' + error);
// 	}
// };

module.exports = router;
