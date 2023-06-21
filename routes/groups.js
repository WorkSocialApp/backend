const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	try {
		// do here
		// call model =>
		//    if good, res.status(200).json(groups)
		// if bad, res.status(500).json({ error: 'Database Internal Failure' });
		res.status(200).json({ groups: [1, 2, 3, 4] });
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});

router.get('/', (req, res) => {
	try {
	} catch (err) {
		res.status(500).json({ error: 'Server Internal Error' });
	}
});
//GROUPS

//delete groups
const deleteGroups = async (id) => {
	try {
		await fetch(`${apiURL}/groups/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		fetchGroups();
		setShowDetails(false);
	} catch (error) {
		console.log('Could not delete group: ' + error);
	}
};

//update groups
const updateGroup = async (id, updatedGroup) => {
	try {
		await fetch(`${apiURL}/groups/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedGroup),
		});
		fetchGroups();
		setShowDetails(false);
	} catch (error) {
		console.log('Could not update group: ' + error);
	}
};

//create groups
const createGroup = async (newGroup) => {
	try {
		await fetch(`${apiURL}/groups`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newGroup),
		});
		fetchGroups();
	} catch (error) {
		console.log('Could not create group: ' + error);
	}
};

//get groups
const fetchGroups = async () => {
	try {
		const response = await fetch(`${apiURL}/groups`);
		const groups = await response.json();
		setGroups(groups);
	} catch (error) {
		console.log('Could not fetch groups: ' + error);
	}
};

//USERS

//get users
const getUsers = async () => {
	try {
		const response = await fetch(`${apiURL}/users`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const users = await response.json();
		// Process the users data as needed
		// ...
	} catch (error) {
		console.log('Could not get users: ' + error);
	}
};

//create users
const createUser = async (newUser) => {
	try {
		await fetch(`${apiURL}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		});
		// Additional logic after successful user creation
		// ...
	} catch (error) {
		console.log('Could not create user: ' + error);
	}
};

//delete users
const deleteUser = async (id) => {
	try {
		await fetch(`${apiURL}/users/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// Additional logic after successful user deletion
		// ...
	} catch (error) {
		console.log('Could not delete user: ' + error);
	}
};

//delete users
const updateUser = async (id, updatedUser) => {
	try {
		await fetch(`${apiURL}/users/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedUser),
		});
		// Additional logic after successful user update
		// ...
	} catch (error) {
		console.log('Could not update user: ' + error);
	}
};

//EVENTS

//get events
const getEvents = async () => {
	try {
		const response = await fetch(`${apiURL}/events`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const events = await response.json();
		// Process the events data as needed
		// ...
	} catch (error) {
		console.log('Could not get events: ' + error);
	}
};

//create events
const createEvent = async (newEvent) => {
	try {
		await fetch(`${apiURL}/events`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newEvent),
		});
		// Additional logic after successful event creation
		// ...
	} catch (error) {
		console.log('Could not create event: ' + error);
	}
};

//delete events
const deleteEvent = async (id) => {
	try {
		await fetch(`${apiURL}/events/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		// Additional logic after successful event deletion
		// ...
	} catch (error) {
		console.log('Could not delete event: ' + error);
	}
};

//update events
const updateEvent = async (id, updatedEvent) => {
	try {
		await fetch(`${apiURL}/events/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedEvent),
		});
		// Additional logic after successful event update
		// ...
	} catch (error) {
		console.log('Could not update event: ' + error);
	}
};

module.exports = router;
