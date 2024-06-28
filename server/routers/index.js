const express = require('express');
const router = express.Router();
const authRoute = require('./authRoute')
const paymentRoute = require('./paymentRoute');
const departmentRoute = require('./departmentRoute');
const mentorDetailsRoute = require('./mentorDetailsRoute')
const designationRoute = require('./designationRoute')

router.use('/payment', paymentRoute);
router.use('/department', departmentRoute);
router.use('/mentor',mentorDetailsRoute);
router.use('/designation', designationRoute);
router.use('/auth', authRoute);

module.exports = router;