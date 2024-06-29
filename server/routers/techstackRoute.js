const express = require('express');
const router = express.Router();
const {authenticateToken, authorize} = require('../middleware/authMiddleware')
const techstackController = require('../controller/techstackController')

router.post('/', authenticateToken, authorize('admin'), techstackController.addTechStackController);
router.get('/', authenticateToken, authorize('admin'), techstackController.getTechStackController);
router.put('/:id', authenticateToken, authorize('admin'), techstackController.updateTechStackController);
router.delete('/:id', authenticateToken, authorize('admin'), techstackController.deleteTechStackController);

module.exports = router;