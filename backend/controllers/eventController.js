const Event = require('../models/eventModel');

// Get all events
exports.getEvents = async (req, res) => {
  const events = await Event.find().populate('creator', 'username');
  res.json(events);
};

// Create a new event
exports.createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  const event = new Event({ title, description, date, creator: req.userId });
  
  try {
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: 'Event creation failed' });
  }
};
