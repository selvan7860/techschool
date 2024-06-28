const express = require('express');
const router = express.Router();
const designationController = require('../controller/designationController');
const {authenticateToken, authorize} = require('../middleware/authMiddleware');

router.post('/', authenticateToken, authorize('admin'), designationController.addDesignationController)
router.get('/', authenticateToken, authorize('admin'), designationController.getDesignationController)
router.put('/:id', authenticateToken, authorize('admin'), designationController.updateDesignationController)
router.delete('/:id', authenticateToken, authorize('admin'), designationController.deleteDesignationController)

module.exports = router;