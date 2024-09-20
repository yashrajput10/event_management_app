const express = require('express');
const { getEvents, createEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getEvents);
router.post('/', authMiddleware, createEvent);

module.exports = router;
