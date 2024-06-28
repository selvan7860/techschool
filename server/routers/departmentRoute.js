const express = require('express');
const router = express.Router();
const departmentRouter = require('../controller/departmentController')

router.post('/', departmentRouter.addDepartmentController)
router.get('/', departmentRouter.getAllDepartmentController)
router.delete('/:id', departmentRouter.deleteDepartmentController)
router.put('/:id', departmentRouter.updateDepartmentController)

module.exports = router;