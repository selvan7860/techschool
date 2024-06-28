const express = require('express');
const router = express.Router();
const paymentController = require('../controller/paymentController');

const {authenticateToken, authorize} = require('../middleware/authMiddleware');

router.post('/',authenticateToken, authorize('admin'), paymentController.addPayment)
router.get('/', authenticateToken, authorize('admin'), paymentController.getAllPaymentController)
router.delete('/:id', authenticateToken, authorize('admin'), paymentController.deletePaymentController)
router.put('/:id', authenticateToken, authorize('admin'), paymentController.updatePaymentController)

module.exports = router;