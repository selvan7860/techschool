const express = require("express");
const router = express.Router();
const {authenticateToken, authorize} = require('../middleware/authMiddleware')
const courseController = require('../controller/courseController')

router.post('/', authenticateToken, authorize('admin'), courseController.addCourseController)
router.get('/', authenticateToken, authorize('admin'), courseController.getAllCourseController)
router.put('/:id', authenticateToken, authorize('admin'), courseController.updateCourseController)
router.delete('/:id', authenticateToken, authorize('admin'), courseController.deleteCourseController)

module.exports = router;