

//GROUPS

// DELETE GROUPS API test
test('DELETE /api/groups/:id should return status 200 and message "Group with ID {id} has been deleted successfully."', async () => {
  const res = await request(app).delete('/api/groups/2');
  expect(res.status).toBe(200);
  expect(res.body.message).toBe('Group with ID 2 has been deleted successfully.');
});

// POST GROUPS API test
test('POST /api/groups should create a new group and return the newly created group object', async () => {
  const newGroup = {
    name: 'Test Group',
    members: ['User1', 'User2', 'User3']
  };

  const res = await request(app)
    .post('/api/groups')
    .send(newGroup)
    .set('Content-Type', 'application/json');

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(newGroup.name);
  expect(res.body.members).toEqual(newGroup.members);
});

// UPDATE GROUPS API test
test('PUT /api/groups/:id should update a group and return the updated group object', async () => {
  const updatedGroup = {
    name: 'Updated Group',
    members: ['User1', 'User2', 'User4']
  };

  const res = await request(app)
    .put('/api/groups/1')
    .send(updatedGroup)
    .set('Content-Type', 'application/json');

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(updatedGroup.name);
  expect(res.body.members).toEqual(updatedGroup.members);
});

// GET GROUPS API test
test('GET /api/groups should return status 200 and an array of group objects', async () => {
  const res = await request(app).get('/api/groups');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});







//USERS

// DELETE USERS API test
test('DELETE /api/users/:id should return status 200 and message "User with ID {id} has been deleted."', async () => {
  const res = await request(app).delete('/api/users/2');
  expect(res.status).toBe(200);
  expect(res.body.message).toBe('User with ID 2 has been deleted.');
});

// POST USERS API test
test('POST /api/users should create a new user and return the newly created user object', async () => {
  const newUser = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
  };

  const res = await request(app)
    .post('/api/users')
    .send(newUser)
    .set('Content-Type', 'application/json');

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(newUser.name);
  expect(res.body.age).toBe(newUser.age);
  expect(res.body.email).toBe(newUser.email);
});

// UPDATE USERS API test
test('PUT /api/users/:id should update a user and return the updated user object', async () => {
  const updatedUser = {
    name: 'Jane Smith',
    age: 35,
    email: 'janesmith@example.com'
  };

  const res = await request(app)
    .put('/api/users/1')
    .send(updatedUser)
    .set('Content-Type', 'application/json');

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(updatedUser.name);
  expect(res.body.age).toBe(updatedUser.age);
  expect(res.body.email).toBe(updatedUser.email);
});

// GET USERS API test
test('GET /api/users should return status 200 and an array of user objects', async () => {
  const res = await request(app).get('/api/users');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});







//EVENTS

// DELETE EVENTS API test
test('DELETE /api/events/:id should return status 200 and message "Event with ID {id} has been deleted."', async () => {
  const res = await request(app).delete('/api/events/2');
  expect(res.status).toBe(200);
  expect(res.body.message).toBe('Event with ID 2 has been deleted.');
});

// POST EVENTS API test
test('POST /api/events should create a new event and return the newly created event object', async () => {
  const newEvent = {
    name: 'Test Event',
    date: '2023-06-15',
    location: 'Test Location'
  };

  const res = await request(app)
    .post('/api/events')
    .send(newEvent)
    .set('Content-Type', 'application/json');

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(newEvent.name);
  expect(res.body.date).toBe(newEvent.date);
  expect(res.body.location).toBe(newEvent.location);
});

// UPDATE EVENTS API test
test('PUT /api/events/:id should update an event and return the updated event object', async () => {
  const updatedEvent = {
    name: 'Updated Event',
    date: '2023-06-20',
    location: 'Updated Location'
  };

  const res = await request(app)
    .put('/api/events/1')
    .send(updatedEvent)
    .set('Content-Type', 'application/json');

  expect(res.status).toBe(200);
  expect(res.body.name).toBe(updatedEvent.name);
  expect(res.body.date).toBe(updatedEvent.date);
  expect(res.body.location).toBe(updatedEvent.location);
});

// GET EVENTS API test
test('GET /api/events should return status 200 and an array of event objects', async () => {
  const res = await request(app).get('/api/events');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

