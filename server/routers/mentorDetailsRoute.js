const express = require('express');
const router = express.Router();
const mentorDetails = require('../controller/mentorDetailsController')
const {authenticateToken, authorize} = require('../middleware/authMiddleware');

router.post('/', authenticateToken, authorize('mentor'), mentorDetails.addMentorDetailController);
router.put('/', authenticateToken, authorize('mentor'), mentorDetails.updateMentorDetailController);


module.exports = router;