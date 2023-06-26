const express = require("express");
const router = express.Router();
const { Events } = require("../schema/models/events");
const { verifyAuth } = require('../middleware/verifyAuth');

// GET - Retrieve all events
router.get("/",verifyAuth, async (req, res) => {
  try {
    let events = await Events.findAll().then((allEvents)=> {
      res.status(200).json({ events });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server Internal Error", error: err });

    })
  } catch (err){}
});

// POST - Create a new event
router.post("/", verifyAuth, async (req, res) => {
  try {
    const { name, date, time, description } = req.body;
    if (!name || !date || !time || !description) {
      res.status(400).json({ message: "Please complete all fields" });
    } else {
      let existingEvent = await Events.findOne({ name });
      if (existingEvent) {
        res.status(409).json({ error: "Event already exists" });
      } else {
        let newEvent = await Events.create({ name, date, time, description });
        if (newEvent) {
          res.status(201).json({ event: newEvent });
        } else {
          res.status(500).json({ error: "Failed to create a new event" });
        }
      }
    }
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

// DELETE - Delete an event by ID
router.delete("/:id", verifyAuth, async (req, res) => {
  try {
    const eventId = req.params.id;
    await Events.destroy({ where: { id: eventId } })
      .then((deletedEvent) => {
        res
          .status(200)
          .json({ message: "Event deleted successfully", deletedEvent });
      })
      .catch((error) => {
        res.status(404).json({ error: "Event not found", error });
      });
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

// PUT - Update an event by ID
router.put("/:id", verifyAuth, async (req, res) => {
  try {
    const eventId = req.params.id;
    const { name, date, time, description } = req.body;
    if (!name) {
      res.status(400).json({ message: "Please provide the event name" });
    } else {
    let existingEvent = await Events.findOne({ where: { name } });
    if (!existingEvent) {
      res.status(404).json({ message: "Event not found" });
    } else {
    if (!date || !time || !description) {
      res.status(400).json({ message: "Please complete all fields" });
    } else {
    let updatedEvent = await Events.update(
      { name, date, time, description },
      { where: { id: eventId } }
    );
    if (updatedEvent[0]) {
      res.status(200).json({ message: "Event updated successfully" });
    } else {
      res.status(500).json({ message: "Failed to update event" });
    }
  }
  }
  }
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});


module.exports = router;
