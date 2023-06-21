const express = require("express");
const router = express.Router();
const { Groups } = require("../schema/models/groups");

let mockGroups = [
  { title: "Powerlifting", members: [["Aaron", "Jhonny", "Nherhu"]] },
  {},
];

// GET - Retrieve all groups
router.get("/", async (req, res) => {
  try {
    let groups = await Groups.findAll();
    res.status(200).json({ groups });
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

// POST - Create a new group
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    let existingGroup = await Groups.findOne({ title });
    if (existingGroup) {
      res.status(409).json({ error: "Group already exists" });
    } else {
      let newGroup = await Groups.create({ title });
      if (newGroup) {
        res.status(201).json({ group: newGroup });
      } else {
        res.status(500).json({ error: "Failed to create a new group" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

// DELETE - Delete a group by ID
router.delete("/:id", async (req, res) => {
  try {
    const groupId = req.params.id;
    await Groups.destroy({ where: { id: groupId } })
      .then((deletedGroup) => {
        res
          .status(200)
          .json({ message: "Group deleted successfully", deletedGroup });
      })
      .catch((error) => {
        res.status(404).json({ error: "Group not found", error });
      });
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

// PUT - Update a group by ID
router.put("/:id", async (req, res) => {
  try {
    const groupId = req.params.id;
    const { title } = req.body;

    let existingGroup = await Groups.findOne({ where: { id: groupId } });
    if (!existingGroup) {
      res.status(404).json({ message: "Group not found" });
    } else {
      if (!title) {
        res.status(400).json({ message: "Please enter a valid Title" });
      } else {
        let updatedGroup = await Groups.update(
          { title },
          { where: { id: groupId } }
        );

        if (updatedGroup[0]) {
          res.status(200).json({ message: "Group updated successfully" });
        } else {
          res.status(500).json({ message: "Server Internal Error" });
        }
      }
    }
  } catch (err) {
    res.status(500).json({ message: "Server Internal Error", error: err });
  }
});

module.exports = router;
